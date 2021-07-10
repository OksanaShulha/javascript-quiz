import { inputGreeting } from "../../shared/input-greeting.js";

/**
 * The questions page.
 *
 * @returns {HTMLDivElement} A rendered questions page.
 */
export const questions = () => {
  const container = document.createElement("div");
  container.className = "body";

  container.appendChild(inputGreeting());

  return container;
};

// Component
// We can use this component not only for the code indicated in the comments, the purpose of the comments below is to explain the meaning of each line of the component
export const titleDescription = (textTitle = "", textDescription = "") => {
  const container = document.createElement("div"); // we create tag div <div class="home-box custom-box hide">
  const h3El = document.createElement("h3"); // we create tag h3 <h3>JavaScript Quiz</h3> inside this div
  h3El.innerHTML = textTitle; // we show that tag <h3> has a text inside "JavaScript Quiz"
  const pEl = document.createElement("p"); // we create tag p <p>Total number of questions:<span class="total-questions">5</span></p>
  pEl.innerHTML = textDescription; // we show that tag <h3> has a text inside "Total number of questions:5"
  container.appendChild(h3El); // we add our elements <h3El> and <pEl> to our container <div>
  container.appendChild(pEl); // we add our elements <h3El> and <pEl> to our container <div>
  return container;
};
