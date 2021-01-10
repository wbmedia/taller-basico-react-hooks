import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <div>
      <Layout></Layout>
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
