/**
 * Validate and export the program data.
 *
 * @exports state
 */

import { isPlainObject } from '../../lib/is-plain-object.js';
import { isJSONable } from '../../lib/is-jsonable.js';
import { validate } from '../../lib/validate.js';
import { observe } from '../../lib/observe/index.js';

import { data } from '../../data.js';
import { schema } from '../../schema.js';

if (!isPlainObject(data)) {
  throw new TypeError('data is not an object');
}

if (!isJSONable(data)) {
  throw new TypeError('data is not valid JSON');
}

const validation = validate(schema, data);
if (!validation.isValid) {
  throw new Error('data does not match schema');
}

const { proxy, history } = observe(data);

window.state = proxy;
window.stateHistory = history;

export { proxy as state, history };
