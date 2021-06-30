import { inputGreeting } from '../../shared/input-greeting.js';

/**
 * The quiz page.
 *
 * @param {object} data - All URL parameters.
 * @param {number} data.id - The id from the URL parameter, or -1.
 * @returns {HTMLDivElement} A rendered quiz page.
 */
export const quiz = ({ id = -1 }) => {
  const container = document.createElement('div');
  container.className = 'body';
  container.innerHTML = id === -1 ? 'quiz: ' : `quiz ${id}: `;

  container.appendChild(inputGreeting());

  return container;
};
