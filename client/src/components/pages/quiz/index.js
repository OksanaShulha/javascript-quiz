import { inputGreeting } from "../../shared/input-greeting.js";

/**
 * The quiz page.
 *
 * @returns {HTMLDivElement} A rendered quiz page.
 */
export const quiz = () => {
  const container = document.createElement("div");
  container.className = "body";

  container.appendChild(inputGreeting());

  return container;
};

// Toggle Class Component

// eslint-disable-next-line no-unused-vars
const toggleClass = (obj, newClass) => {
  obj.classList[0].remove();
  obj.classList.add(newClass);
  // eslint-disable-next-line spellcheck/spell-checker
  // eslint-disable-next-line no-undef
  if (answer === true) {
    // eslint-disable-next-line spellcheck/spell-checker
    // eslint-disable-next-line no-undef
    toggleClass(target.green);
  } else {
    // eslint-disable-next-line spellcheck/spell-checker
    // eslint-disable-next-line no-undef
    toggleClass(target.red);
  }
};
