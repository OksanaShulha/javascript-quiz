export const options = (answers) => {
  const container = document.createElement("div");
  container.className = "option-container";
  for (let i = 0; i < answers.length; i++) {
    const option = answers[i];
    const optionDiv = document.createElement("div");
    optionDiv.className = "option";
    optionDiv.innerHTML = option.text;
    container.appendChild(optionDiv);
  }
  return container;
};
