import { titleDescription } from "../shared/title-description.js";

// eslint-disable-next-line consistent-return
export const resultDescriptionRange = (correctAnswer) => {
  if (correctAnswer <= 2) {
    return titleDescription("Results", "Keep learning and try again later!");
  }
  if (correctAnswer === 3) {
    return titleDescription("Results", "Good but you can get better!");
  }
  if (correctAnswer === 4) {
    return titleDescription("Results", "Great job, almost perfect!");
  }
  if (correctAnswer === 5) {
    return titleDescription("Results", "Excellent you are hired!");
  }
};
