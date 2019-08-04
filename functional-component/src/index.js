import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { SecondJsxComponent } from './PureComponent'
import PriceSummary from './PriceSummary'

const DefaultJsxElement = (
  <Fragment>
    <h1> Default Pure Component is rendered. </h1>
  </Fragment>
);


export default class App extends Component {
  state = {
    data: [],
    price: 10,
    tax: 2
  }

  clickIt = () => {
    this.setState((prevState) => ({
      data: [...prevState.data, 'testing']
    }))
  }
  changePrice = () => {
    this.setState({ price: this.state.price + 1 })
  }

  render() {
    return (
      <div className="App">
        <h1>Main Component</h1>
        <input type="button" value="Click it" onClick={this.clickIt} />
        <input type="button" value="Change Price" onClick={this.changePrice} />
        {DefaultJsxElement}
        {SecondJsxComponent}
        <PriceSummary price={this.state.price} tax={this.state.tax} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
