import { state } from "../init/state.js";
import { reverse } from "../logic/reverse.js";

export const changeGreeting = (event) => {
  state.greeting = event.target.value;
  document.getElementById("mirrored").innerHTML = reverse(state.greeting);
};
