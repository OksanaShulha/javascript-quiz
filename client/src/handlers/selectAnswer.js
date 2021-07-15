import { state } from "../init/state.js";
import { getProgress } from "../logic/progress-bar.js";
import { progressBar } from "../components/shared/progress-bar.js";

const showRightOption = () => {
  const { questions, currentQuestion } = state;
  const optionContainer = document.querySelector(".option-container");
  const options = optionContainer.children;
  for (let i = 0; i < options.length; i++) {
    const option = options[i];
    const currentAnswer = questions[currentQuestion].answers;
    for (let j = 0; j < currentAnswer.length; j++) {
      if (option.innerHTML === currentAnswer[i].text) {
        if (currentAnswer[i].correct === true) {
          option.className = "right";
        }
      }
    }
  }
};

export const selectAnswer = (event) => {
  const body = document.querySelector(".body");
  const { target } = event;
  const { questions, currentQuestion } = state;
  let correctAnswer = state.results.correctAnswers;
  let wrongAnswer = state.results.wrongAnswers;
  // check if user answer
  if (state.questions[currentQuestion].answered === true) return;

  if (target.className === "option") {
    questions[currentQuestion].answered = true;
    for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
      const option = questions[currentQuestion].answers[i];
      // check which option is selected
      if (target.innerHTML === option.text) {
        option.selected = true;

        if (option.correct === true) {
          correctAnswer++;
          state.results.correctAnswers = correctAnswer;
          target.className = "right";
        } else {
          wrongAnswer++;
          state.results.wrongAnswers = wrongAnswer;
          target.className = "wrong";
          showRightOption();
        }
      }
    }
  }
  body.lastElementChild.remove();
  body.appendChild(progressBar(getProgress()));
};
