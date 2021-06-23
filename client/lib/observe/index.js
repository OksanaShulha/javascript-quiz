import { isPlainObject } from '../is-plain-object.js';
import { deepClone } from '../deep-clone.js';
import { proxify } from './proxify.js';

export const observe = (state) => {
  if (!isPlainObject(state)) {
    throw new TypeError('state must be a plain object');
  }

  const history = [];

  const clonedState = deepClone(state);
  const { proxy } = proxify(clonedState, history);

  return {
    proxy,
    history,
  };
};
