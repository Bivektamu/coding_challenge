import React, { useEffect, useRef, useState } from 'react'

interface State {
    isRunning: boolean;
    elapsedTime: number;
}
const initState = {
    isRunning: false,
    elapsedTime: 0
};
const StopWatch = () => {
    const intervalId = useRef<NodeJS.Timeout | null>(null)
    const [stopWatchState, setStopWatchState] = useState<State>(initState)

    const { isRunning, elapsedTime } = stopWatchState;


    useEffect(() => {
        intervalId.current = setInterval(tick, 1000)
        return (() => {
            if (intervalId.current) {
                clearInterval(intervalId.current)
                intervalId.current = null
            }
        })
    }, [isRunning, elapsedTime])


    const tick = () => {
        if (stopWatchState.isRunning) {
            setStopWatchState(prevState => ({
                ...prevState,
                elapsedTime: prevState.elapsedTime + 1
            }));
        }
    };

    const handleStartStop = () => {
        setStopWatchState((prevState: State) => ({ ...prevState, isRunning: !prevState.isRunning }));
    }

    const handleReset = () => {
        setStopWatchState((prev: State) => ({ ...prev, elapsedTime: 0 }));
    }

    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Elapsed Time: {elapsedTime} seconds</p>
            <button onClick={handleStartStop}>
                {isRunning ? 'Stop' : 'Start'}
            </button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );

}

export default StopWatch