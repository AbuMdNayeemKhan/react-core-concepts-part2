import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const handelAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handelMinuse = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handelMinuse}>-</button>
            <button onClick={handelAdd}>+</button>
        </div>
    );
};

export default Counter;