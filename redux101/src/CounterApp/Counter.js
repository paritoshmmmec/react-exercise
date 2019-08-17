import React from 'react'
import NestedCounter from './NestedCounter';
import NestedAnotherContainer from './NestedAnotherContainer';

const Counter = ({ count, incrementCounter, getOrders }) => {
    console.log(incrementCounter);
    return (
        <div>
            <h1>Parent Container</h1>
            <NestedAnotherContainer count={count}
                increment={() => incrementCounter(1)}
            />
            {/* <NestedCounter count={count}
                increment={increment}
                getOrders={getOrders} /> */}
        </div>
    )
}

export default Counter;