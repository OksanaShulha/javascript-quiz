import { state } from "../../../init/state.js";
import { button } from "../../shared/button.js";
import { questionWithOptions } from "../../shared/questionWithOptions.js";
// eslint-disable-next-line import/no-cycle
import { goToHome } from "../../../handlers/goToHome.js";

// import { state } from "remark";

/**
 * The questions page.
 *
 * @returns {HTMLDivElement} A rendered questions page.
 */
export const questions = () => {
  // count all the questions in state.js
  const { questions } = state;
  state.results.totalQuestions = questions.length;
  const { totalQuestions } = state.results;
  // is going to count on each iteration rendering all the questions
  let counter = 0;
  // body container
  const container = document.createElement("div");
  container.classList.add("quiz-box", "custom-box");
  container.id = "body";
  // render all questions
  if (!document.getElementById("question")) {
    state.questions.forEach((questionObj) => {
      counter++;
      const currentQuestion = counter;
      container.appendChild(
        questionWithOptions(questionObj, currentQuestion, totalQuestions)
      );
    });
  }

  const returnButton = button("Go To Home", goToHome);
  container.appendChild(returnButton);

  return container;
};
