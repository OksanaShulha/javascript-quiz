// We have to import something

export const progressDot = (indicatorClass, answer) => {
  const div = document.createElement("div");
  div.className = indicatorClass;
  questions.forEach(() => {
    progressDot.appendChild(div);
  });
};

// not yet
