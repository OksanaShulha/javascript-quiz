import { data } from "../../data/quiz.js";

// this function has to return an array with statuses based om data
export const getProgress = () => {
    const statuses = [];
    for (let i = 0; i < data.questions.length; i++) {
        const question = data.questions[i];
        if (question.answered === false) {
            statuses.push("neutral");
        } else { 
        if (userAnsweredRight(question.answers) === true){
            statuses.push("right");
        } else {
            statuses.push("wrong");
        }
    }
    return statuses;
};

function userAnsweredRight(answers) {
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
}

// [‘right’, ‘right’, ‘’wrong”, “neutral”]
// Const array = [];
// myArray.push(“hello”);
// [“hello”]
// [“hello”]
// [“hello”, 5]
