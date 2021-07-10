/* eslint-disable no-undef */
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

const toggleClass = (obj, newClass) => {
  obj.classList[0].remove();
  obj.classList.add(newClass);
};
if (answer === true){
  toggleClass(target.green);
} else {
  toggleClass(target.red);
}
