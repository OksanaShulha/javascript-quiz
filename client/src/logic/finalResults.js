import { state } from "../init/state.js";

export const finalResultObj = () => {
  const { totalQuestions, wrongAnswers, correctAnswers, attempts } =
    state.results;
  const percentage = `${(correctAnswers / totalQuestions) * 100} %`;
  const totalScore = `${correctAnswers}/${totalQuestions}`;
  const resultsObj = {
    totalQuestions,
    attempts,
    correctAnswers,
    wrongAnswers,
    percentage,
    totalScore,
  };
  return resultsObj;
};
