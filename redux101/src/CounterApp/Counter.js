import React from 'react'

const Counter = ({ count, increment }) => {
    return (
        <div>
            <h1>Testing {count}</h1>
            <button onClick={increment} > Click it</button>
        </div>
    )
}

export default Counter;