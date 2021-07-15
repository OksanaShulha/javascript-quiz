import { state } from "../init/state.js";

const userAnsweredRight = (answers) => {
  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];
    // if (answer.correct !== answer.selected)
    if (
      // the users answer is right
      answer.correct === true &&
      answer.selected === true
    ) {
      return true;
    }
  }
  // the users answer is wrong
  return false;
};

// this function has to return an array with statuses based om data
export const getProgress = () => {
  const statuses = [];
  const { questions } = state;
  questions.forEach((question) => {
    const { answered, answers } = question;
    // if user do not answer the question
    if (!answered) {
      statuses.push("neutral");
      return;
    }
    if (userAnsweredRight(answers)) {
      statuses.push("right");
    } else {
      statuses.push("wrong");
    }
  });
  return statuses;
};
