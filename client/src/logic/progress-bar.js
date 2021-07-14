import { data } from "../../data/quiz.js";

const userAnsweredRight = (answers) => {
  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];
    // if (answer.correct !== answer.selected)
    if (
      // the users answer is wrong
      (answer.correct === true && answer.selected === false) ||
      (answer.correct === false && answer.selected === true)
    ) {
      return false;
    }
  }
  // the users answer is correct
  return true;
};

// this function has to return an array with statuses based om data
export const getProgress = () => {
  const statuses = [];
  for (const question of data.questions) {
    if (question.answered === false) {
      statuses.push("neutral");
    } else {
      if (userAnsweredRight(question.answers) === true) {
        statuses.push("right");
      }
      statuses.push("wrong");
    }
  }
  return statuses;
};
