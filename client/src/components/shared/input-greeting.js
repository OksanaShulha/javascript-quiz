import { state } from "../../init/state.js";

import { changeGreeting } from "../../handlers/change-greeting.js";
import { reverse } from "../../logic/reverse.js";

export const inputGreeting = () => {
  const mirror = document.createElement("code");
  mirror.innerText = reverse(state.greeting);
  mirror.id = "mirrored";

  const input = document.createElement("input");
  input.value = state.greeting;
  input.addEventListener("keyup", changeGreeting);

  const container = document.createElement("div");
  container.appendChild(input);
  container.appendChild(mirror);
  return container;
};
