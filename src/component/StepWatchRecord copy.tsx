import React, { Component } from 'react';

interface State {
  isRunning: boolean;
  elapsedTime: number;
  laps: number[];
}

class StepWatchRecord extends Component<{}, State> {
  private intervalId: NodeJS.Timeout | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      isRunning: false,
      elapsedTime: 0,
      laps: []
    };
    this.handleStartStop = this.handleStartStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleLap = this.handleLap.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  tick = () => {
    if (this.state.isRunning) {
      this.setState(prevState => ({
        elapsedTime: prevState.elapsedTime + 1
      }));
    }
  };

  handleStartStop() {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }));
  }

  handleReset() {
    this.setState({
      elapsedTime: 0,
      laps: []
    });
  }

  handleLap() {
    this.setState(prevState => ({
      laps: [...prevState.laps, prevState.elapsedTime]
    }));
  }

  render() {
    const { isRunning, elapsedTime, laps } = this.state;
    return (
      <div>
        <h1>StepWatchRecord</h1>
        <p>Elapsed Time: {elapsedTime} seconds</p>
        <button onClick={this.handleStartStop}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={this.handleReset}>Reset</button>
        <button onClick={this.handleLap}>Lap</button>
        <ul>
          {laps.map((lap, index) => (
            <li key={index}>Lap {index + 1}: {lap} seconds</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default StepWatchRecord;
