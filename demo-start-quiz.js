import { data } from "../../data/quiz.js";
export const startQuiz =()=>{
for (let i=0; i< data.questions.length; i++) {  // we loop through all questions
const question = data.questions[i]; // we get one specific question
question.answered = false;
for (let j=0, j < question.answers.length; j++){
    const answerOfQuestion = question.answers[j]; // we get one specific answer
    answerOfQuestion.selected = false;
    console log(answerOfQuestion.selected));
};
};
