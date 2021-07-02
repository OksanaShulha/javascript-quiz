> if you change the name of your repository, you will need to change the `.repoName` property in [./client/config.js](./client/config.js)

# JavaScript Quiz

<!-- describe the project -->

---

## Repo Setup

- Give each member _write_ access to the repo
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

## Local Development

This is a static website that only uses HTML, CSS and JavaScript, so you can run it any static server like `liveStudy` `http-server` or `study-lenses`. But the best way to run it is:

- `npm run dev`

This will launch a development server that will update the website in your browser each time you make a change in your code. The development server uses [vite.js](https://vitejs.dev/guide/why.html) which is faster and more helpful `liveServer`. Vite will only reload the files that you change, and will display clear error messages in the browser when something goes wrong in creation phase.

---

## Continuous Integration

This repository comes with 5 CI scripts. You can run the same checks locally to make sure you have no errors before pushing, this will make everything easier for you and your reviewer. If the checks pass locally then they should pass when you push:

- **Linting JavaScript**
  - `npm run lint:js -- ./path/to/file.js`: lint one file at a time by passing the path to that file
  - `npm run lint:js:ci`: lint all of the JavaScript in `/src`. This is the same command that is run in GitHub so if it works locally it should pass the checks when you push.
- **Linting CSS**
  - `npm run lint:css -- ./path/to/file.css`: lint one file at a time by passing the path to that file
  - `npm run lint:css:ci`: lint all of the CSS in `/public`. This is the same command that is run in GitHub so if it works locally it should pass the checks when you push.
- **Testing**
  - `npm run test -- ./path/to/file.spec.js`: test one `.spec.js` file at a time
  - `npm run test:ci`: test all `.spec.js` files at once. This is the same command that is run in GitHub so if it works locally it should pass the checks when you push.
- **Documenting**
  - `npm run document`: render the documentation before pushing to make sure there are no errors.
- **Building and Deploying**
  - `npm run build`: this will build your source code into minified and bundled code for deployment.
