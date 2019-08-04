import React, { Component, Suspense } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

export default class App extends Component {
  state = {
    isShowing: false
  };

  showMore = () => {
    this.setState(() => ({
      isShowing: true
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <input type="button" onClick={this.showMore} value="Show More" />

        {this.state.isShowing && (
          <Suspense fallback={<div>Loading Component...</div>}>
            <LazyComponent />
          </Suspense>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
