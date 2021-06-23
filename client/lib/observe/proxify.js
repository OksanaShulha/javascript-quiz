import { isPlainObject } from '../is-plain-object.js';
import { deepClone } from '../deep-clone.js';
import { isJSONable } from '../is-jsonable.js';
import { location } from '../location.js';

export const proxify = (thing, history = [], path = []) => {
  // { proxy, thing, active }
  //  use this to prevent memory leaks from updating history
  const proxies = [];

  // proxify from the bottom up
  //  ignore strange things like properties on arrays
  if (Array.isArray(thing)) {
    for (let i = 0; i < thing.length; i++) {
      const nextThing = thing[i];
      if (isPlainObject(nextThing) || Array.isArray(nextThing)) {
        thing[i] = proxify(nextThing, history, [...path, i]).proxy;
      }
    }
  } else if (isPlainObject) {
    for (const key in thing) {
      const nextThing = thing[key];
      if (isPlainObject(nextThing) || Array.isArray(nextThing)) {
        thing[key] = proxify(nextThing, history, [...path, key]).proxy;
      }
    }
  } else {
    return thing;
  }

  const logToHistory = (action, key, value) => {
    history.push({
      action,
      key: [...path, key].join(', '),
      value: deepClone(value),
      location: location(),
      // state: deepClone(thing),
    });
  };

  const reportAndThrow = (error) => {
    history[history.length - 1].error = error;
    // history.push({ error });
    console.log(history);
    throw error;
  };

  const proxy = new Proxy(thing, {
    // --- create & update ---
    //  "create" if key was not in object, otherwise "update"
    set: (target, key, value) => {
      // to avoid logging length changes when an array is updated
      if (Array.isArray(target) && key === 'length') {
        target.length = value;
        return true;
      }

      logToHistory(key in target ? 'update' : 'create', key, value);

      if (!isJSONable(value)) {
        reportAndThrow(new TypeError('new value is not JSON-friendly'));
      }
      if (typeof key === 'symbol') {
        reportAndThrow(new TypeError('state keys cannot be symbols'));
      }

      if (isPlainObject(value) || Array.isArray(value)) {
        target[key] = proxify(value, history, [...path, key]).proxy;
      } else {
        target[key] = value;
      }

      history[history.length - 1].state = deepClone(target);

      return true;
    },
    defineProperty: (target, key, oDesc) => {
      if (!('value' in oDesc)) {
        history.push({});
        reportAndThrow(
          new ReferenceError('properties in state must be defined with a value')
        );
      }
      logToHistory(key in target ? 'update' : 'create', key, value);

      if (!isJSONable(value)) {
        reportAndThrow(new TypeError('new value is not JSON-friendly'));
      }
      if (typeof key === 'symbol') {
        reportAndThrow(new TypeError('state keys cannot be symbols'));
      }

      target[key] = oDesc.value;

      if (isPlainObject(value) || Array.isArray(value)) {
        target[key] = proxify(oDesc.value, history, [...path, key]).proxy;
      } else {
        target[key] = oDesc.value;
      }

      history[history.length - 1].state = deepClone(target);

      return true;
    },

    // --- delete ---
    deleteProperty: (target, key) => {
      logToHistory('delete', key, target[key]);

      if (!(key in target)) {
        reportAndThrow(new ReferenceError(`key "${key}" does not exist`));
      }

      delete target[key];

      history[history.length - 1].state = deepClone(target);

      return true;
    },

    // --- reads ---
    //  logs would be too cluttered with these?
    get(target, key) {
      logToHistory('read', key, target[key]);

      if (!(key in target)) {
        reportAndThrow(new ReferenceError(`key "${key}" does not exist`));
      }

      return target[key];
    },
    has(target, key) {
      const hasProperty = key in target;
      history.push({
        action: 'has property',
        key: key,
        hasProperty: key in target,
        key: [...path, key].join(', '),
        location: location(),
        state: deepClone(thing),
      });
      return hasProperty;
    },
    getOwnPropertyDescriptor(target, key) {
      const descriptor = Object.getOwnPropertyDescriptor(target, key);
      history.push({
        action: 'get own property descriptor',
        descriptor,
        key: [...path, key].join(', '),
        location: location(),
        state: deepClone(thing),
      });
      return descriptor;
    },
  });

  return {
    proxy,
    history,
    path,
  };
};
