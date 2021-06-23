import { inputGreeting } from '../../shared/input-greeting.js';

/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */
export const home = () => {
  const container = document.createElement('div');
  container.className = 'body';
  container.innerHTML = 'home: ';

  container.appendChild(inputGreeting());

  return container;
};
