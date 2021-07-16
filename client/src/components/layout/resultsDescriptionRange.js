import { titleDescription } from "../shared/title-description.js";

// eslint-disable-next-line consistent-return
export const resultDescriptionRange = (correctAnswer, totalQuestions) => {
  const percentage = (correctAnswer / totalQuestions) * 100;
  if (percentage <= 50) {
    return titleDescription("Results", "Keep learning and try again later!");
  }
  if (percentage > 50 && percentage <= 65) {
    return titleDescription("Results", "Good but you can get better!");
  }
  if (percentage > 65 && percentage <= 80) {
    return titleDescription("Results", "Great job, almost perfect!");
  }
  if (percentage > 80 && percentage <= 100) {
    return titleDescription("Results", "Excellent you are hired!");
  }
};
