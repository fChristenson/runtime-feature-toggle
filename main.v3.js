const React = require("react");
const ReactDOM = require("react-dom");

window.__COUNTRY__ = "US"; // we set this at runtime

const App = require("./app");

ReactDOM.render(<App />, document.getElementById("root"));
