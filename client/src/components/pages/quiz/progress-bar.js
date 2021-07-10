// We have to import something

export const progressBar = (indicatorClass, answer) => {
  const div = document.createElement("div");
  div.className = indicatorClass;
  // we have to add some code to show that circles will be added one by one
  if (answer === true) {
    // eslint-disable-next-line no-undef
    indicatorClass(target.green);
  } else {
    // eslint-disable-next-line no-undef
    indicatorClass(target.red);
  }
  return div;
};
