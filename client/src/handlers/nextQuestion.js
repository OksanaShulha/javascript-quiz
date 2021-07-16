/* eslint-disable import/no-cycle */
import { state } from "../init/state.js";
import { questionWithOptions } from "../components/shared/questionWithOptions.js";
import { table } from "../components/layout/table.js";
import { button } from "../components/shared/button.js";
import { goToHome } from "./goToHome.js";
import { tryAgain } from "./tryAgain.js";
import { finalResultObj } from "../logic/finalResults.js";
import { resultDescriptionRange } from "../components/layout/resultsDescriptionRange.js";

const renderResultTable = () => {
  const body = document.querySelector(".body");
  const nextBtn = document.querySelector("button");
  const progressBarEl = document.querySelector(".progress-bar");
  body.firstElementChild.remove();
  body.removeChild(nextBtn);
  body.removeChild(progressBarEl);
  // update the state
  const finalResults = finalResultObj();
  state.results.percentage = finalResults.percentage;
  state.results.totalScore = finalResults.totalScore;
  const { correctAnswers, totalQuestions } = state.results;
  const titleEl = resultDescriptionRange(correctAnswers, totalQuestions);
  const tableEl = table(finalResults);
  body.appendChild(titleEl);
  body.appendChild(tableEl);
  const tryAgainBtn = button("Try Again", tryAgain);
  const goToHomeEl = button("Go To Home", goToHome);
  body.appendChild(tryAgainBtn);
  body.appendChild(goToHomeEl);
};

export const nextQuestion = () => {
  const body = document.querySelector(".body");
  let nextQuestionIndex = state.currentQuestion;
  const { questions } = state;
  const { totalQuestions } = state.results;
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
