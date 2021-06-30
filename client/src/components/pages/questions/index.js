import { inputGreeting } from '../../shared/input-greeting.js';

/**
 * The questions page.
 *
 * @param {object} data - All URL parameters.
 * @param {number} data.id - The id from the URL parameter, or -1.
 * @returns {HTMLDivElement} A rendered questions page.
 */
export const questions = ({ id = -1 }) => {
  const container = document.createElement('div');
  container.className = 'body';
  container.innerHTML = id === -1 ? 'questions: ' : `question ${id}: `;

  container.appendChild(inputGreeting());

  return container;
};
