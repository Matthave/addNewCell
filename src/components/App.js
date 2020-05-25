import React from "react";
import Main from "./Main";
import logo from "../IMG/logoTree.png";

import "../css/style.css";

class App extends React.Component {
  render() {
    return (
      <div className="wrapApp">
        <div className="App">
          <img className="App__logo" src={logo} alt="" />
          <h1 className="App__title">Cell Tree</h1>
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
