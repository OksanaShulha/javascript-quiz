import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import jsdocToMarkdown from 'jsdoc-to-markdown';
import prettier from 'prettier';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const TITLE = 'DOCS';

const sourceRelativePath = process.argv[2] || '../src/';
const docsRelativePath = process.argv[3] || '../docs/README.md';

const SOURCE_DIR = path.normalize(path.join(__dirname, sourceRelativePath));
const DOCS_PATH = path.normalize(path.join(__dirname, docsRelativePath));

try {
  fs.accessSync(SOURCE_DIR);
} catch (err) {
  console.log(`--- creating ${sourceRelativePath} directory ---`);
  fs.mkdirSync(SOURCE_DIR);
}

let newToc = '';

let newDocs = '';

const appendToDocs = async (absolutePath, depth = 1) => {
  const indent = new Array(depth).join('  ');
  const headerLevel = new Array(depth).join('#');
  const paths = fs.readdirSync(absolutePath);
  paths.sort((prev, next) => {
    const absPrev = path.join(absolutePath, prev);
    const prevIsDir = fs.statSync(absPrev).isDirectory();

    const absNext = path.join(absolutePath, next);
    const nextIsDir = fs.statSync(absNext).isDirectory();

    if (prevIsDir && !nextIsDir) {
      return -1;
    }
    if (!prevIsDir && nextIsDir) {
      return 1;
    }
    return 0;
  });

  for (let nextPath of paths) {
    if (
      /.spec./i.test(nextPath) ||
      /.test./i.test(nextPath) ||
      /sandbox.js/i.test(nextPath)
    ) {
      continue;
    }

    const subPath = path.normalize(path.join(absolutePath, nextPath));

    const isDirectory = fs.statSync(subPath).isDirectory();
    if (isDirectory) {
      newToc += `\n${indent}- ${nextPath}`;

      // const readmePath = path.join(subPath, 'README.md');
      // const hasReadme =
      //   fs.existsSync(readmePath) &&
      //   fs.statSync(readmePath).isFile() &&
      //   path.extname(readmePath) === '.md';
      // if (hasReadme) {
      //   const readmeSrc = fs.readFileSync(readmePath);
      //   newDocs += `\n\n---\n\n${readmeSrc}`;
      // } else {
      // newDocs += `\n\n---\n\n${headerLevel}# /${nextPath}`;
      // }

      newDocs += `\n\n${headerLevel}# /${nextPath}`;

      await appendToDocs(subPath, depth + 1);

      // newDocs += `\n\n---\n\n[TOP](#${TITLE.split(' ').join('-')})\n\n`;
      newDocs += `\n\n---\n\n`;

      continue;
    }

    const isNotJavaScript = path.extname(subPath) !== '.js';
    if (isNotJavaScript) {
      continue;
    }

    const isSpecOrTestFile =
      /.spec./i.test(path) || /.test./i.test(path) || /sandbox.js/i.test(path);
    if (isSpecOrTestFile) {
      continue;
    }

    const relativePath = subPath.replace(path.join(process.cwd()), '..');

    const anchorId = relativePath
      .split(' ')
      .join('')
      .split('.')
      .join('')
      .split('/')
      .join('');

    newToc += `\n${indent}- [${nextPath}](#${anchorId})`;

    const docs = jsdocToMarkdown.renderSync({
      files: subPath,
      exampleLang: 'js',
    });

    const kindlessDocs = docs.replace(/\*\*Kind[^\n]+/g, '\n');
    console.log(relativePath);
    newDocs +=
      // '\n\n---\n\n' +
      '\n\n' +
      `<details><summary><a href="../${relativePath}" id="${anchorId}">${relativePath}</a></summary>\n\n` +
      kindlessDocs +
      '</details>';
  }
};

appendToDocs(SOURCE_DIR).then((_) => {
  const oldReadme = fs.existsSync(DOCS_PATH)
    ? fs.readFileSync(DOCS_PATH, 'utf-8')
    : '';

  const tocRegex =
    /(<!--[ \t]*BEGIN TOC[ \t]*-->)([\s\S]*)(<!--[ \t]*END TOC[ \t]*-->)/;
  const tocReplacer = `<!-- BEGIN TOC -->${newToc}\n\n---\n\n<!-- END TOC -->`;
  const tocedReadme = oldReadme.match(tocRegex)
    ? oldReadme.replace(tocRegex, tocReplacer)
    : `${tocReplacer}\n\n---\n\n${oldReadme}`;

  const treeRegex =
    /(<!--[ \t]*BEGIN TREE[ \t]*-->)([\s\S]*)(<!--[ \t]*END TREE[ \t]*-->)/;
  const treeReplacer = `<!-- BEGIN TREE -->\n\n> [interactive graph](./dependency-graph.html)\n\n![dependency graph](./dependency-graph.svg)\n\n<!-- END TREE -->`;
  const treedReadme = tocedReadme.match(treeRegex)
    ? tocedReadme.replace(treeRegex, treeReplacer)
    : `${treeReplacer}\n\n${tocedReadme}`;

  const titleRegex =
    /(<!--[ \t]*BEGIN TITLE[ \t]*-->)([\s\S]*)(<!--[ \t]*END TITLE[ \t]*-->)/;
  const titleReplacer = `<!-- BEGIN TITLE -->\n# ${TITLE}\n\n<!-- END TITLE -->`;
  const titledReadme = treedReadme.match(titleRegex)
    ? treedReadme.replace(titleRegex, titleReplacer)
    : `${titleReplacer}\n\n${treedReadme}`;

  const docsRegex =
    /(<!--[ \t]*BEGIN DOCS[ \t]*-->)([\s\S]*)(<!--[ \t]*END DOCS[ \t]*-->)/;
  const docsReplacer = `<!-- BEGIN DOCS -->${newDocs}\n\n<!-- END DOCS -->`;
  const newDocsDocument = titledReadme.match(docsRegex)
    ? titledReadme.replace(docsRegex, docsReplacer)
    : `${titledReadme}\n\n${docsReplacer}`;

  let formattedDocs = newDocsDocument;
  try {
    formattedDocs = prettier.format(formattedDocs, {
      parser: 'markdown',
    });
  } catch (o_0) {}

  fs.writeFileSync(DOCS_PATH, formattedDocs, 'utf-8');
});
