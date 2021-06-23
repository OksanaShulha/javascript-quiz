import { state } from '../../init/state.js';
import { changeGreeting } from '../../handlers/change-greeting.js';

export const inputGreeting = () => {
  const input = document.createElement('input');
  input.value = state.greeting;

  input.addEventListener('keyup', changeGreeting);

  return input;
};
