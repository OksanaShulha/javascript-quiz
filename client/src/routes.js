import { page } from './components/layout/page.js';

import { home } from './components/pages/home/index.js';
import { quiz } from './components/pages/quiz/index.js';
import { questions } from './components/pages/questions/index.js';

/**
 * Defines the route URLs, names and callbacks.
 *
 * @exports routes
 */

export const routes = [
  {
    path: `${window.location.pathname}/`,
    name: 'home',
    callback: () => {
      const root = document.getElementById('root');
      root.innerHTML = '';
      root.appendChild(page(home, routes));
    },
  },
  {
    path: `${window.location.pathname}/quiz`,
    name: 'quiz',
    callback: () => {
      const root = document.getElementById('root');
      root.innerHTML = '';
      root.appendChild(page(quiz, routes));
    },
  },
  {
    path: `${window.location.pathname}/questions`,
    name: 'questions',
    callback: () => {
      const root = document.getElementById('root');
      root.innerHTML = '';
      root.appendChild(page(questions, routes));
    },
  },
];
