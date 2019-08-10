import React, { useState } from 'react'

const Counter = () => {
    const [count, increaseCount] = useState(2)
    const [fruit, setFruitName] = useState('banana');
    const [isTabOpen, openTab] = useState(false);

    return (
        <div>
            <h1>{count}</h1>
            <h1>{fruit}</h1>
            <h1>{isTabOpen.toString()}</h1>
            <div>
                <button onClick={() => increaseCount(count + 1)}>Click it!</button>
            </div>
            <div>
                <input type="text" onChange={e => { setFruitName(e.target.value) }} />
            </div>
            <div>
                <input type="checkbox" onChange={e => { openTab(e.target.checked) }} />
            </div>
        </div >
    )
}

export default Counter  