// component progressDot is inside component progressBar

export const progressDot = (status) => {
  const div = document.createElement("div");
  // we are going to write status right wrong of neutral
  if (status === "right") {
    div.className = "right-answer";
  } else if (status === "wrong") {
    div.className = "wrong-answer";
  } else {
    div.className = "neutral";
  }
  return div;
};
// const statuses = ["right", "wrong", "neutral"]
export const progressBar = (statuses) => {
  const div = document.createElement("div");
  div.className = "progress-bar";
  for (const status of statuses) {
    div.appendChild(progressDot(status));
  }
  return div;
};
