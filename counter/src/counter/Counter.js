import React from 'react';


const Counter = ({ count, increment , decrement }) => {
    return (
        <div>
            testing {count}
            <input type="button" onClick={increment} value="Hit it" />
        </div>
    );
}

export default Counter;