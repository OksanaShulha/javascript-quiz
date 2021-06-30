# JS Quiz Starter

<!-- describe the project -->

students will be given:

- some starter code for the plumbing and folder layout
- a backlog of user stories
- suggested schema for their quiz data

they will need to build:

- wireframes for the 3 pages ("static" home page, quiz page, questions-editing page)
- initial quiz data
- development strategy
- the website

---

## Repo Setup

- (if working in a group) give each member _write_ access to the repo
- Turn on GitHub Pages and put a link to your website in the repo's description
  - Configure it to build from the `gh-pages` branch
- in the _Branches_ section of your repo's settings make sure:
  - The repository [requires a review](https://github.blog/2018-03-23-require-multiple-reviewers/) before pull requests can be merged.
  - The `master`/`main` branch must "_Require status checks to pass before merging_"
  - The `master`/`main` branch must "_Require require branches to be up to date before merging_"

---

## Local Setup

So you're ready to start coding? If you haven't cloned this repository already you should, and then ...

1. Clone this repository:
   - `$ git clone git@github.com:HackYourFutureBelgium/this-repository.git`
2. Navigate to this repository in your local computer
   - `$ cd this-repository`
3. Install the project's development dependencies - you will need these for the code quality automation:
   - `$ npm install`

---

## Running the Site

This is a static website that only uses HTML, CSS and JavaScript, so you can run it directly from VSCode using `liveServer` or another static server like `http-server` or `study-lenses`. But the best way is:

- `npm run dev`

This will launch a development server that will update the website in your browser in real-time. The development server uses [vite.js](https://vitejs.dev/guide/why.html) which is faster and more helpful `liveServer`. Vite will only reload the files that you change, and will display clear error messages in the browser when something goes wrong in creation phase.

---

## Developing your Code

It's recommended that you use VSCode to write your HTML, CSS and JavaScript. Each time you make a change in VSCode the changes will appear automatically in the browser if you used `npm run dev`. Everything you have learned about the debugger will come in handy! You can use breakpoints and `debugger` statements to step through while your website is running.

---

## Code Quality Automation

Writing code is hard. To write even just 10 lines there are 100 things you need to think about, and 1000 mistakes you can make. Developers are clever and lazy people. They have built tools to help with all of this.

This repository comes with features to help you and your group write good code. Some features are for checking your code manually before pushing it, and others are for checking your code automatically when you open a PR to the `main`/`master` branch.

### Continuous Integration (CI)

> checks on GitHub

Remember the `.lint-pass.txt`, `.test-pass.txt`, ... files from Practice Code Review? Enough of that! It's time for the real deal. With this project repository your code quality results will not be written into separate files, but will be checked automatically by GitHub. Any mistakes and your PR not be able to merge.

When you open a PR to `main`/`master` in your repository, GitHub will run the workflows in [./.github/workflows](./.github/worflows):

- **Lint JavaScript CI**: Lints all the .js files in your `/src` folder, if there are any warnings or errors the check will fail.
- **Lint CSS CI**: lints all the .css files in your `/public` folder, if there are any warnings or errors the check will fail.
- **Test CI**: runs all the `.spec.js` fils in your `/src` folder. If any tests fail, this check will fail.
- **Document CI**: re-renders the `DOCS.md` file in the root of your repository, making sure that the documentation is always up to date. If the documentation script has any trouble the check will fail.
- **Build & Deploy**: bundles your code (CSS & JS) into a single minified file and moves it all to the `gh-pages` branch. This way you can develop using modules and well-formatted code, then deploy a tiny cross-browser version of your website for production.

You will not be able to merge your branch until all the checks pass. These checks will be run again each time you push changes to your branch, so no worries if you don't pass the checks on your first try.

### Local Checks

> checks on your own computer

You can run the same checks locally to make sure you have no errors before pushing, this will make everything easier for you and your reviewer. If the checks pass locally then they should pass when you push.

- **Linting JavaScript**
  - `npm run lint:js -- ./path/to/file.js`: lint one file at a time by passing the path to that file
  - `npm run lint:js:ci`: lint all of the JavaScript in `/src`. This is the same command that is run in GitHub so if it works locally it should pass the checks when you push.
- **Linting CSS**
  - `npm run lint:css -- ./path/to/file.css`: lint one file at a time by passing the path to that file
  - `npm run lint:css:ci`: lint all of the CSS in `/public`. This is the same command that is run in GitHub so if it works locally it should pass the checks when you push.
- **Testing**
  - `npm run test -- ./path/to/file.spec.js`: test one `.spec.js` file at a time
  - `npm run test:ci`: test all `.spec.js` files at once. This is the same command that is run in GitHub so if it works locally it should pass the checks when you push.
- **Formatting**
  - `npm run format -- ./path/to/file`: you can format any file type with this command (.js, .css, .html, .md)
  - if you install the Prettier extension for VSCode and have it format on save, then you don't need to use this command
  - there is no extra CI check for formatting, but the linter will check some formatting. The rest is up to your code reviewer
- **Documenting**
  - `npm run document`: render the documentation before pushing to make sure there are no errors.
