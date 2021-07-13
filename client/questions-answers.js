/* eslint-disable no-console */
/* eslint-disable spellcheck/spell-checker */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const questionNumber = document.createElement(".question-number");
const questionText = document.createElement(".question-text");
const optionContainer = document.createElement(".option-container");

let questionCounter = 0;
let currentQuestion;
const availableQuestion = [];
const availableOptions = [];

// push the questions into availableQuestions Array
const setAvailableQuestions = () => {
  const totalQuestion = quiz.length;
  for (let i = 0; i < totalQuestion; i++) {
    availableQuestion.push(quiz[i]);
  }
};

const getNewQuestion = () => {
  // set question number
  //   questionNumber.innerHTML = `Question ${questionCounter + 1} of ${
  //     quiz.length
  //   }`;

  // set question text
  // get random question
  const questionIndex =
    availableQuestion[Math.floor(Math.random() * availableQuestion.length)];
  currentQuestion = questionIndex;
  questionText.innerHTML = currentQuestion.q;
  // get the position of 'questionIndex' from the availableQuestion Array;
  const index1 = availableQuestion.indexOf(questionIndex);
  // remove the questionIndex from the availableQuestion Array, question doesn't repeat
  availableQuestion.splice(index1, 1);
  // // set options
  // get the length of options
  const optionLen = currentQuestion.options.length;
  // push options into availableOptions Array
  for (let i = 0; i < optionLen; i++) {
    availableOptions.push(i);
  }

  // create options in html
  for (let i = 0; i < optionLen; i++) {
    // random option
    const optionIndex =
      availableOptions[Math.floor(Math.random() * availableOptions.length)];
    // get the position of 'optionIndex' from the availableOptions
    const index2 = availableOptions.indexOf(optionIndex);
    // remove the 'optionIndex' from the availableOptions, so that the option does not repeat
    availableOptions.splice(index2, 1);
    const option = document.createElement("div");
    option.innerHTML = currentQuestion.options[optionIndex];
    option.id = optionIndex;
    option.className = "option";
    optionContainer.appendChild(option);
  }
  questionCounter++;
};

const next = () => {
  if (questionCounter === quiz.length) {
    console.log("quiz over");
  } else {
    getNewQuestion();
  }
};

// The onload property processes load events after the element has finished loading. This is used with the window element to execute a script after the webpage has completely loaded. ... It will run the function as soon as the webpage has been loaded
window.onload = () => {
  // first we will set all questions in availableQuestions Array
  setAvailableQuestions();
  // second we will call getNewQuestion(); function
  getNewQuestion();
};
