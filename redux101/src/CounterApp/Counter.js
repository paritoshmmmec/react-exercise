import React from 'react'
import NestedCounter from './NestedCounter';

const Counter = ({ count, increment, getOrders }) => {

    return (
        <div>
            <h1>Parent Container</h1>
            <NestedCounter count={count}
                increment={increment}
                getOrders={getOrders} />
        </div>
    )
}

export default Counter;