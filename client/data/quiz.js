export const data = {
  greeting: "hello",
  currentQuestion: 0,
  questions: [
    {
      question: "What was the first JavaScript name?",
      answered: false,
      answers: [
        { text: "Java", correct: false, selected: false },
        { text: "Mocha", correct: true, selected: false },
        { text: "LiveScript", correct: false, selected: false },
        { text: "ECMAScript", correct: false, selected: false },
      ],
    },
    {
      question: "What is the result: '13' + 7?",
      answered: false,
      answers: [
        { text: "20", correct: false, selected: false },
        { text: "137", correct: true, selected: false },
        { text: "error", correct: false, selected: false },
        { text: "undefined", correct: false, selected: false },
      ],
    },
    {
      question: "Who invented JavaScript?",
      answered: false,
      answers: [
        { text: "Douglas Crockford", correct: false, selected: false },
        { text: "Sheryl Sandberg", correct: false, selected: false },
        { text: "Brendan Eich", correct: true, selected: true },
        { text: "Bill Gates", correct: false, selected: false },
      ],
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answered: false,
      answers: [
        { text: "Node.js", correct: false, selected: false },
        { text: "TypeScript", correct: false, selected: false },
        { text: "npm", correct: true, selected: true },
        { text: "Lint", correct: false, selected: false },
      ],
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answered: false,
      answers: [
        { text: "Angular", correct: false, selected: false },
        { text: "jQuery", correct: false, selected: false },
        { text: "RequireJS", correct: false, selected: false },
        { text: "ESLint", correct: true, selected: false },
      ],
    },
  ],
  results: {
    totalQuestions: 0,
    attempts: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    percentage: 0,
    totalScore: 0,
  },
};
