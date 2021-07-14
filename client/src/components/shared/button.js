export const button = (text, handler) => {
  const btn = document.createElement("button");
  btn.className = "btn";
  btn.addEventListener("click", handler);
  btn.innerText = text;
  return btn;
};
