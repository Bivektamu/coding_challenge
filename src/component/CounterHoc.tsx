import React, { useCallback, useState } from 'react'

interface Props {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

const CounterHoc = ({ count, increment, decrement, reset }: Props) => {
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

const withCouterState = (WrappedComponent) => {

    return () => {
        const [count, setCount] = useState(0)
        const increment = useCallback(() => {
            setCount(prev => prev + 1)
        }, [])

        const decrement = useCallback(() => {
            setCount(prev => prev - 1)
        }, [])

        const reset = useCallback(() => {
            setCount(0)
        }, [])

        return <WrappedComponent count={count} increment={increment} decrement={decrement} reset={reset} />
    }

}

export default withCouterState(CounterHoc)