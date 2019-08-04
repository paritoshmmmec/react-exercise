import React, { Component , Fragment } from "react";
import ReactDOM from "react-dom";
import { SecondJsxComponent } from './PureComponent'
import PriceSummary from './PriceSummary'

const DefaultJsxElement = (
  <Fragment>
    <h1> Default Pure Component is rendered. </h1>
  </Fragment>
);


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Main Component</h1>
        {DefaultJsxElement}
        {SecondJsxComponent}
        <PriceSummary price={10} tax={2} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
