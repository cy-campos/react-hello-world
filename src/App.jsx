import React, { Component } from "react";
import Nav from "./components/nav/Nav";
import Main from "./components/mainView/Main";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
