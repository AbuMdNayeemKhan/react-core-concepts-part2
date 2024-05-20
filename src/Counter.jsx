import { useState } from "react";

const Counter = () => {
    const [num, setNum] = useState(0);
    
    const addNumber = () => {
        const newNumber = num + 1;
        return setNum(newNumber);
    }
    const reduseNumber = () => {
        const newNumber = num - 1;
        return setNum(newNumber);
    }
    const reSetNumber = () => {
        setNum(0);
    }
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={reduseNumber}> Reduse </button>
            <button className="px-3" onClick={reSetNumber}> Reset </button>
            <button onClick={addNumber}> Add </button>
        </div>
    );
};

export default Counter;