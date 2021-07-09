import { numbersOfQuestions } from "./numbersOfQuestions.js";
import { data } from "../../../../data/quiz.js";

export const instruction = () => {
  const number = data.questions.length; // This is the number of qustions in data
//   console.log(number);

  const inst = document.createElement("div");
  inst.className = "instruction";
  document.body.appendChild(inst);

  const instTitle = document.createElement("h1");
  instTitle.className = "instruction-h ";
  instTitle.innerText = "Welcome to JS Quiz";

  inst.appendChild(instTitle);

  const instMsg = document.createElement("p");
  instMsg.className = "instruction-p";
  instMsg.innerText =
    "Hi!! everyone; this is a JavaScript quiz which has just {"+ number + "} easy questions. GOOD LUCK";
  inst.appendChild(instMsg);


const startBtn = document.createElement("button");
startBtn.className="instruction-btn";
startBtn.type="button";
startBtn.value="Start";
inst.appendChild(startBtn);
startBtn.innerText="Let's Start";

  return inst;
};
