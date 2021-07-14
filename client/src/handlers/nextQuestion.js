import { state } from "../init/state.js";
import { questionWithOptions } from "../components/shared/questionWithOptions.js";
import { table } from "../components/layout/table.js";
import { titleDescription } from "../components/shared/title-description.js";
import { button } from "../components/shared/button.js";
import { goToHome } from "./goToHome.js";

const renderResultTable = () => {
  const body = document.querySelector(".body");
  const nextBtn = document.querySelector("button");
  const progressBarEl = document.querySelector(".progress-bar");
  body.firstElementChild.remove();
  body.removeChild(nextBtn);
  body.removeChild(progressBarEl);
  const titleEl = titleDescription("Results", "A description");
  const tableEl = table(state.results);
  body.appendChild(titleEl);
  body.appendChild(tableEl);
  const tryAgainBtn = button("Try Again");
  const goToHomeEl = button("Go To Home");
  body.appendChild(tryAgainBtn);
  body.appendChild(goToHomeEl);
};

export const nextQuestion = () => {
  const body = document.querySelector(".body");
  let nextQuestionIndex = state.currentQuestion;
  const { currentQuestion } = state;
  const { questions } = state;
  const { totalQuestions } = state.results;
  // if user doesn't answer the question
  let { attempts } = state.results;
  if (questions[currentQuestion].answered === false) {
    attempts++;
    state.results.attempts = attempts;
  }
  // if user finish the questions
  if (state.currentQuestion === totalQuestions - 1) {
    return renderResultTable();
  }
  // remove the previous question
  body.firstElementChild.remove();
  // render the next question
  nextQuestionIndex++;
  state.currentQuestion = nextQuestionIndex;
  const nextQuestionEl = questionWithOptions(
    questions[nextQuestionIndex],
    state.currentQuestion + 1,
    totalQuestions
  );
  return body.prepend(nextQuestionEl);
};
