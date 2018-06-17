const React = require("react");
const ReactDOM = require("react-dom");
const getConfig = require("./config");

const config = getConfig("SE"); // we set this at runtime

const App = () => {
  return (
    <div>
      {config.headerIsEnabled ? <h1>header</h1> : null}
      {config.subHeaderIsEnabled ? <h2>subheader</h2> : null}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
