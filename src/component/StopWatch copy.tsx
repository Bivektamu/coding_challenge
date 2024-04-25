import React, { Component } from 'react';

interface State {
  isRunning: boolean;
  elapsedTime: number;
}

// no props
class Stopwatch extends Component<{}, State> {
  private intervalId: NodeJS.Timeout | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      isRunning: false,
      elapsedTime: 0
    };
    this.handleStartStop = this.handleStartStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
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
      elapsedTime: 0
    });
  }

  render() {
    const { isRunning, elapsedTime } = this.state;
    return (
      <div>
        <h1>Stopwatch</h1>
        <p>Elapsed Time: {elapsedTime} seconds</p>
        <button onClick={this.handleStartStop}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
