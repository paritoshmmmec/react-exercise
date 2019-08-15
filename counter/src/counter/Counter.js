import React, { Fragment } from 'react';


const Counter = ({ count, incrementCounter, decrementCounter }) => {
    return (
        <Fragment>
            testing {count}
            <div>
                <input type="button" onClick={() => incrementCounter(1)} value="Up" />
            </div>
            <div>
                <input type="button" onClick={() => decrementCounter(1)} value="Down" />
            </div>
        </Fragment>
    );
}

export default Counter;