import React from "react";
import ReactDOM from "react-dom";
import Person from "./components/Person";

const App = () => {
  return (
    <div>
      <Person />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
