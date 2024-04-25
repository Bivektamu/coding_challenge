import React, { Component } from 'react';

interface Props {
  name: string;
}

interface State {
  count: number;
}

class Counter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0
    };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1>{`Hello, ${name}!`}</h1>
        <p>Count: {count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Counter;
