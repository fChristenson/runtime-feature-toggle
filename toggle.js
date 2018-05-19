const React = require("react");

// functions is an object where the key is the name of the
// market that uses it
const toggle = functions => {
  if (typeof functions !== "object" || Array.isArray(functions))
    throw new Error("functions not object");

  if (!window.__COUNTRY__) throw new Error("__COUNTRY__ not set");

  const fn = functions[window.__COUNTRY__];

  if (typeof fn !== "function")
    throw new Error(`${window.__COUNTRY__} does not have a function`);

  return fn();
};

module.exports.toggle = toggle;

const Toggle = ({ components }) => {
  const Component = components[window.__COUNTRY__];

  if (!Component)
    throw new Error(`${window.__COUNTRY__} does not have a Component`);

  return Component;
};

module.exports.Toggle = Toggle;
