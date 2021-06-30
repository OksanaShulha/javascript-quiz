import { page } from './components/layout/page.js';

import { home } from './components/pages/home/index.js';
import { quiz } from './components/pages/quiz/index.js';
import { questions } from './components/pages/questions/index.js';

/**
 * Defines the route URLs, names and callbacks.
 *
 * @exports routes
 */

const parse = (params = {}) =>
  Object.fromEntries(
    Object.entries(params)
      .filter((param) => param[1] !== 'undefined')
      .map((param) => [
        param[0],
        param[1] !== '' && !Number.isNaN(Number(param[1]))
          ? Number(param[1])
          : param[1] === 'true'
          ? true
          : param[1] === 'false'
          ? false
          : param[1] === 'null'
          ? null
          : param[1],
      ])
  );

export const routes = [];
const routeHandler =
  (pageBody) =>
  ({ params, data }) => {
    const namedRoutes = routes.filter((route) => `name` in route);
    const cleanData = { ...data };
    cleanData.id = !('id' in data) ? -1 : data.id;
    const root = document.getElementById('root');
    root.innerHTML = '';
    root.appendChild(page(pageBody(parse(data), parse(params)), namedRoutes));
  };

[
  {
    name: 'home',
    path: `/`,
    callback: routeHandler(home),
  },
  {
    name: 'quiz',
    path: `/quiz`,
    callback: routeHandler(quiz),
  },
  {
    path: `/quiz/:id`,
    callback: routeHandler(quiz),
  },
  {
    name: 'questions',
    path: `/questions`,
    callback: routeHandler(questions),
  },
  {
    path: `/questions/:id`,
    callback: routeHandler(questions),
  },
].forEach((route) => routes.push(route));
