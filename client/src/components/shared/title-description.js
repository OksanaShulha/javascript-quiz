export const titleDescription = (title, description) => {
  const div = document.createElement("div");
  const titleEl = document.createElement("div");
  titleEl.className = "title-header";
  titleEl.innerText = title;
  const descriptionEl = document.createElement("div");
  descriptionEl.className = "description";
  descriptionEl.innerText = description;

  div.appendChild(titleEl);
  div.appendChild(descriptionEl);

  return div;
};
