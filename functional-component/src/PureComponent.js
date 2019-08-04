import React, { Fragment } from "react";

const DefaultJsxElement = (
  <Fragment>
    <h1> Default Pure Component is rendered. </h1>
  </Fragment>
);

export const SecondJsxComponent = (
  <Fragment>
    <h1> Second Pure Component is rendered. </h1>
  </Fragment>
);

export const PureComponent = () => {
  return (
    <h1>PureComponent</h1>
  );
}

export default DefaultJsxElement;
