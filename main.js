window.__COUNTRY__ = "US"; // we set this at runtime

const React = require("react");
const ReactDOM = require("react-dom");
const { toggle, Toggle } = require("./toggle");

const sweden = () => {
  console.log("sweden");
  console.log("--------------------------");
};

const america = () => {
  console.log("america");
  console.log("--------------------------");
};

const functions = {
  SE: sweden,
  US: america
};

const SwedishApp = ({ country, onClick }) => (
  <button onClick={onClick}>{country}</button>
);

const AmericanApp = ({ country, onClick }) => (
  <button onClick={onClick}>{country}</button>
);

const components = {
  SE: <SwedishApp country="Sweden" onClick={() => toggle(functions)} />,
  US: <AmericanApp country="America" onClick={() => toggle(functions)} />
};

ReactDOM.render(
  <Toggle components={components} />,
  document.getElementById("root")
);
