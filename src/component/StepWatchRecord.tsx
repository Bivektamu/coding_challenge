import React, { useEffect, useRef, useState } from 'react'

interface State {
  isRunning: boolean;
  elapsedTime: number;
  laps: number[];
}
const initState = {
  isRunning: false,
  laps: [],
  elapsedTime: 0
};
const StopWatchRecord = () => {
  const intervalId = useRef<NodeJS.Timeout | null>(null)
  const [stopWatchState, setStopWatchState] = useState<State>(initState)

  const { isRunning, elapsedTime, laps } = stopWatchState;


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
    setStopWatchState((prev: State) => ({ ...prev, elapsedTime: 0, laps: [] }));
  }

  const handleLap = () => {
    setStopWatchState(prevState => ({ ...prevState, laps: [...prevState.laps, prevState.elapsedTime] }));
  }

  return (

    <div>
      <h1>StepWatchRecord</h1>
      <p>Elapsed Time: {elapsedTime} seconds</p>
      <button onClick={handleStartStop}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleLap}>Lap</button>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>Lap {index + 1}: {lap} seconds</li>
        ))}
      </ul>
    </div>
  );

}

export default StopWatchRecord