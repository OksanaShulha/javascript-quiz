import { camelCaseToTitleCase } from "../../logic/camelCaseToTitleCase.js";

export const table = (obj, tableClassList = []) => {
  const tableEl = document.createElement("table");
  if (tableClassList.length !== 0) {
    tableClassList.forEach((classStyle) => tableEl.classList.add(classStyle));
  }
  for (const [key, value] of Object.entries(obj)) {
    const trEl = document.createElement("tr");
    const tdKey = document.createElement("td");
    tdKey.innerHTML = camelCaseToTitleCase(key);
    const tdValue = document.createElement("td");
    const spanEl = document.createElement("span");
    spanEl.innerHTML = value;
    tdValue.appendChild(spanEl);
    trEl.appendChild(tdKey);
    trEl.appendChild(tdValue);
    tableEl.appendChild(trEl);
  }
  return tableEl;
};
