export const button = (text, handler) => {
  const btn = document.createElement("button");
  btn.className = "btn";
  btn.addEventListener("click", (event) => {
    event.stopPropagation();
    handler(event);
  });
  btn.innerText = text;
  return btn;
};
