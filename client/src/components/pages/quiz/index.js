import { inputGreeting } from '../../shared/input-greeting.js';

/**
 * The quiz page.
 *
 * @returns {HTMLDivElement} A rendered quiz page.
 */
export const quiz = () => {
  const container = document.createElement('div');
  container.className = 'body';
  container.innerHTML = 'quiz: ';

  container.appendChild(inputGreeting());

  return container;
};
