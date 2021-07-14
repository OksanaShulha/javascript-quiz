import { camelCaseToTitleCase } from "../../logic/camelCaseToTitleCase.js";

export const table = (tableObject) => {
  const div = document.createElement("div");
  div.className = "result-box";
  const tableEl = document.createElement("table");
  div.appendChild(tableEl);

  for (const [key, value] of Object.entries(tableObject)) {
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
  return div;
};
