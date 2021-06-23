import { state } from '../init/state.js';

export const changeGreeting = (event) => {
  state.greeting = event.target.value;
};
