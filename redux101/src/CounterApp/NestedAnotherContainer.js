import React from 'react'

const NestedAnotherContainer = ({ count, increment, fetchPosts }) => {

    return (
        <div>
            <h1>Testing {count}</h1>
            <button onClick={increment} > Click it</button>
            <button onClick={fetchPosts} > Get Me Orders</button>
        </div>
    )
}

export default NestedAnotherContainer;
