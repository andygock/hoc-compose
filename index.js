// ref: https://github.com/acdlite/recompose/blob/master/src/packages/recompose/compose.js

const compose = (...funcs) =>
  funcs.reduce((a, b) => (...args) => a(b(...args)), arg => arg);

// may add additional functions here later...

export { compose };
export default compose;
