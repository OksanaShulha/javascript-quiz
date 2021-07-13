// import { inputGreeting } from "../../shared/input-greeting.js";
import { titleDescription } from "../../shared/title-description.js";
import { button } from "../../shared/button.js";
// eslint-disable-next-line import/no-cycle
import { startQuiz } from "../../../handlers/start-quiz.js";
/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */
export const home = () => {
  const container = document.createElement("div");
  container.className = "body";
  // container.innerHTML = "home: ";

  // container.appendChild(inputGreeting());
  container.appendChild(
    titleDescription("Instructions", "The number of questions: 5")
  );
  container.appendChild(button("Start Quiz", startQuiz));
  return container;
};
