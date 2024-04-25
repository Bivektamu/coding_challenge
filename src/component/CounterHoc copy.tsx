import React, { PureComponent } from 'react';

interface Props {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

class CounterHoc extends PureComponent<Props> {
  render() {
    const { count, increment, decrement, reset } = this.props;
    return (
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }
}

const withCounterState = (WrappedComponent: React.ComponentType<Props>) => {
  return class extends PureComponent<{}, { count: number }> {
    state = {
      count: 0
    };

    increment = () => {
      this.setState(prevState => ({ count: prevState.count + 1 }));
    };

    decrement = () => {
      this.setState(prevState => ({ count: prevState.count - 1 }));
    };

    reset = () => {
      this.setState({ count: 0 });
    };

    render() {
      const { count } = this.state;
      return (
        <WrappedComponent
          count={count}
          increment={this.increment}
          decrement={this.decrement}
          reset={this.reset}
        />
      );
    }
  };
};

// export default CounterHoc;
export default withCounterState(CounterHoc);
