
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

// Component
// We can use this component not only for the code indicated in the comments, the purpose of the comments below is to explain the meaning of each line of the component
export const answers = (obj, containerClass, answersClass) => {
  const mainDiv = document.createElement("div"); // we create a div for  <div class="option-container">
  mainDiv.className = containerClass; // we go to the class="option-container". We show which exactly class is inside this div
  for (const element of obj) {
    // we're going to run each element (option) inside obj. We choose object not an array, because divs inside are properties and not elements
    const answerDiv = document.createElement("div"); // we create a div for <div class="option">20</div> <div class="option">137</div> <div class="option">undefined</div> <div class="option">error</div>
    answerDiv.innerHTML = element.text; // we show that the last div has text inside such as 20, 137 and etc.
    answerDiv.className = answersClass; // we go to the class="option". We show which exactly class is inside the last div
    mainDiv.appendChild(answerDiv); // we add every next element (option) one by one
  }
  return mainDiv;
};
