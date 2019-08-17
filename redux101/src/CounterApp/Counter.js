import React from 'react'
import NestedCounter from './NestedCounter';
import NestedAnotherContainer from './NestedAnotherContainer';

const Counter = ({ count, increment, getOrders }) => {
    return (
        <div>
            <h1>Parent Container</h1>
            <NestedAnotherContainer count={count}
                increment={increment}
                getOrders={getOrders} />
            <NestedCounter count={count}
                increment={increment}
                getOrders={getOrders} />
        </div>
    )
}

export default Counter;