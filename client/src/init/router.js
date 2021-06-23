/**
 * Initializes a new router instance and sets your defined routes.
 *
 * @exports router
 */

import Navigo from '../../lib/navigo/index.js';

import { routes } from '../routes.js';

const router = new Navigo('/');

for (const route of routes) {
  router.on(route.path, route.callback);
}

// 404 route is missing

export { router };
