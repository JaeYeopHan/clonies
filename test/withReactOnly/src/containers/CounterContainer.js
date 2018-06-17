import React, { Component } from 'react';
import { Button } from '../components/Button';
import { Counter } from '../components/Counter';
import { plusCount, minusCount } from '../actions/countAction';

class CounterContainer extends Component {
  constructor(props) {
    super();

    const { store } = props;

    this.state = {
      count: store.getState().count,
    };

    store.subscribe(() => {
      const state = store.getState();
      const newState = { count: state.count };

      this.setState(newState);
    });
  }

  render() {
    const { store } = this.props;

    return (
      <div align="center">
        <h1>React Demo</h1>
        <Button content={`+`} handleClick={() => store.dispatch(plusCount())} />
        <Counter count={this.state.count} />
        <Button
          content={`-`}
          handleClick={() => store.dispatch(minusCount())}
        />
      </div>
    );
  }
}

export default CounterContainer;
