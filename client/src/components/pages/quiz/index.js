import { state } from "../../../init/state.js";
import { questionWithOptions } from "../../shared/questionWithOptions.js";
import { button } from "../../shared/button.js";
// eslint-disable-next-line import/no-cycle
import { nextQuestion } from "../../../handlers/nextQuestion.js";
import { progressBar } from "../../shared/progress-bar.js";
import { getProgress } from "../../../logic/progress-bar.js";
import { selectAnswer } from "../../../handlers/selectAnswer.js";

/**
 * The quiz page.
 *
 * @returns {HTMLDivElement} A rendered quiz page.
 */
export const quiz = () => {
  const container = document.createElement("div");
  container.className = "body";
  const numberOfQuestions = state.questions.length;
  state.results.totalQuestions = numberOfQuestions;
  const { questions, currentQuestion } = state;
  const question = questionWithOptions(
    questions[currentQuestion],
    currentQuestion + 1,
    numberOfQuestions
  );
  container.appendChild(question);
  const nextBtn = button("Next", nextQuestion);
  container.appendChild(nextBtn);
  const progressDotEl = progressBar(getProgress());
  container.appendChild(progressDotEl);
  container.addEventListener("click", selectAnswer);
  return container;
};
