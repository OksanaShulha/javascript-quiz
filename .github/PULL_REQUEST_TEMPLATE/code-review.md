---
name: code review PR
about: A template PR for contributing to this project
---

<!--
  make this PR easy to find:

  - assign yourself
  - labels: `for: _`, `type: _`, ...
  - milestones
  - request a review
-->

## Checklists

- [ ] All CI checks pass
- [ ] The branch works when you pull it and run it locally

<!--
  here are some more specific checklists for different types of code
  you can delete the checklists that don't apply to your PR
-->

### HTML

- [ ] the code is well-formatted
- [ ] the HTML code passes [validator.w3.org](https://validator.w3.org/)
- [ ] there are no inline styles (example: `style='color: red;'`)
- [ ] there are no `<style>` tags with CSS, all styles are hrefs
- [ ] there is no inline JavaScript (example: `onclick='doSomething()'`)
- [ ] there are no `<script>` tags with JS, all JS is in an separate file
- [ ] `id`s are used for JavaScript only, not for CSS
- [ ] semantic tags are used
- [ ] ARIA labels are used where necessary
- [ ] spelling and grammar is correct in all site content

### CSS

- [ ] the code is well-formatted
- [ ] the code does not use any `#` id's
- [ ] styles are responsive

### JavaScript

- [ ] code is clean and easy to read
- [ ] helpful variable names are used
- [ ] all comments are clear and help to understand the code
- [ ] there is no unused code in comments
- [ ] all file names are helpful and match their exports

<details>
<summary>src/data.js</summary>
<br>

- [ ] the file does not import anything
- [ ] the file only exports JS data (primitives, arrays, objects, ...)
- [ ] the file does not contain any functions or logic
- (optional) the data is documented with JSDocs

</details>
<details>
<summary>src/init</summary>
<br>

- [ ] there is an `index.js` that is included by the `index.html` file
- [ ] `../listener` files are imported
- [ ] there is no code that needs to run _after_ the page is initialized
- [ ] any other files have helpful names

</details>
<details>
<summary>src/listeners</summary>
<br>

- [ ] the DOM can be queried to find elements
- [ ] the DOM _is not_ be modified
- [ ] handlers are imported and used as callbacks to event listeners
- [ ] no other functions are imported or used
- [ ] the file name makes sense for the listener

</details>
<details>
<summary>src/components</summary>
<br>

- [ ] A DOM element is returned
- [ ] handlers can be imported and used as callbacks to event listeners
- [ ] _logic_, _components_ and _procedures_ can also be imported

</details>
<details>
<summary>src/handlers</summary>
<br>

- [ ] handlers have a JSDoc comment
- [ ] the function name matches the file name
- [ ] handlers are used as a callback to `.addEventListener` somewhere in the program
- [ ] functions from `/logic` or `/procedures` files may be imported and called
- [ ] functions from `/handlers` may be imported and attached to the DOM with event listeners
- [ ] data from `/data.js` may be imported and used
- [ ] handlers may read and write to the DOM
- [ ] handlers _do not_ return values that you will need later in the program

</details>
<details>
<summary>src/logic</summary>
<br>

- [ ] the handler has a complete and correct JSDoc comment
- [ ] the function name matches the file name
- [ ] other functions from `/logic` may be imported and called
- [ ] the function _does not_ read or write to the DOM
- [ ] the function _does not_ log to the console
- [ ] each logic function has a `.spec.js` file
  - [ ] tests are simple with no extra code
  - [ ] tests are well-named
  - [ ] tests cover common use cases (bonus for edge cases)
  - [ ] tests check for side-effects (if necessary)

</details>
