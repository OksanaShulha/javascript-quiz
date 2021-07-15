import { state } from "../init/state.js";
import { quiz } from "../components/pages/quiz/index.js";

export const tryAgain = () => {
  state.currentQuestion = 0;
  for (let i = 0; i < state.questions.length; i++) {
    // we loop through all questions
    const question = state.questions[i]; // we get one specific question
    question.answered = false; // user hasn't answered to any question
    for (let j = 0; j < question.answers.length; j++) {
      const answerOfQuestion = question.answers[j]; // we get one specific answer
      answerOfQuestion.selected = false;
    }
  }
  // clean the results
  for (const key in state.results) {
    if (key === "totalQuestions") {
      // eslint-disable-next-line no-continue
      continue;
    }
    state.results[key] = 0;
  }
  const navBar = document.querySelector(".navbar");
  navBar.nextElementSibling.remove();
  navBar.after(quiz());
  console.log(state);
};
