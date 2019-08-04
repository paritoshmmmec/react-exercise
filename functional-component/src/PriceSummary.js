import React, { Fragment } from 'react'

const PriceSummary = ({ price, tax }) => {
    return (
        <Fragment>
            <div>
                <h2>Price : {price}</h2>
                <h3>tax : {tax}</h3>
            </div>
        </Fragment>

    );
}

export default PriceSummary;