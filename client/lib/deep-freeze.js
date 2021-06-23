// https://github.com/dogma-io/freezly/blob/master/src/index.js

export const deepFreeze = (thing) => {
  // good enough type checking for now because of isJSONable
  if (Array.isArray(thing)) {
    return Object.freeze(
      thing.map((item) => {
        return deepFreeze(item);
      })
    );
  } else if (typeof thing === 'object' && thing !== null) {
    return Object.freeze(
      Object.keys(thing).reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: deepFreeze(thing[key]),
        });
      }, {})
    );
  }

  return thing;
};
