import React, { useState } from 'react'

const Counter = () => {
    const [count, increaseCount] = useState(2)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => increaseCount(count + 1)}>Click it!</button>
        </div >
    )
}

export default Counter  