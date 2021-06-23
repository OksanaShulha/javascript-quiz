import { inputGreeting } from '../../shared/input-greeting.js';

/**
 * The questions page.
 *
 * @returns {HTMLDivElement} A rendered questions page.
 */
export const questions = () => {
  const container = document.createElement('div');
  container.className = 'body';
  container.innerHTML = 'questions: ';

  container.appendChild(inputGreeting());

  return container;
};
