const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h3", {}, props.name),
    React.createElement("h3", {}, props.email),
    React.createElement("h3", {}, props.role),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement(
      "h1",
      {},
      "Bienvenido al Taller de React Hooks Basico!"
    ),
    React.createElement(Person, {
      name: "Antonio Nicasio",
      email: "antonio.nicasio.herrera@gmail.com",
      role: "Software Engineer",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
