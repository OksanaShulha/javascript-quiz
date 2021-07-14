import { titleDescription } from "./title-description.js";
import { options } from "./options.js";

export const questionWithOptions = (
  questionObj,
  currentQuestion,
  totalQuestions,
  eventObj
) => {
  const div = document.createElement("div");
  const title = `Question ${currentQuestion} of ${totalQuestions}`;
  const description = questionObj.question;
  const titleDescriptionEl = titleDescription(title, description);
  div.appendChild(titleDescriptionEl);
  const optionsEl = options(questionObj.answers);
  div.appendChild(optionsEl);
  if (eventObj) {
    optionsEl.addEventListener(eventObj.type, eventObj.handler);
  }
  return div;
};
