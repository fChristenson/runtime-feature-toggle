const React = require("react");

const App = () => {
  return (
    <div>
      <h1>foo</h1>
    </div>
  );
};

const App2 = () => {
  return (
    <div>
      <h1>bar</h1>
    </div>
  );
};

let appToExport = () => null;

if (window.__COUNTRY__ === "US") {
  appToExport = App2;
} else {
  appToExport = App;
}

module.exports = appToExport;
