import React, { Fragment, memo } from 'react'

const PriceSummary = memo(({ price, tax }) => {
    return (
        <Fragment>
            <div>
                <h2>Price : {price}</h2>
                <h3>tax : {tax}</h3>
            </div>
        </Fragment>

    );
})

export default PriceSummary;