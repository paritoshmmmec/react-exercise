import React, { Fragment } from 'react';


const Counter = ({ count, increment, decrement }) => {
    return (
        <Fragment>
            testing {count}
            <div>
                <input type="button" onClick={increment} value="Up" />
            </div>
            <div>
                <input type="button" onClick={decrement} value="Down" />
            </div>
        </Fragment>
    );
}

export default Counter;