import React, { Component } from "react";
import ReactDOM from "react-dom";
import DefaultJsxElement, { SecondJsxComponent, PureComponent } from './PureComponent'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Main Component</h1>
        {DefaultJsxElement}
        {SecondJsxComponent}
        <PureComponent />
        {PureComponent}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
