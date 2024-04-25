import React, { Component, useState } from 'react';

interface Props {
    name: string;
}

const Counter = ({ name }: Props) => {

    const [count, setCount] = useState<number>(0)

    const incrementCount = () => {
        setCount(prevState => prevState + 1)
    }

    return (
        <div>
            <h1>{`Hello, ${name}!`}</h1>
            <p>Count: {count}</p>
            <button onClick={ incrementCount}>Increment</button>
        </div>
    );
}

export default Counter;
