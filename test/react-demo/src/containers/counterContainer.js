import React, { Component, Fragment } from 'react';
import { Button } from '../components/Button';
import { Counter } from '../components/Counter';

class CounterContainer extends Component {
  render() {
    return (
      <div align="center">
        <h1>React Demo</h1>
        <Button content={`+`} />
        <Counter number={0} />
        <Button content={`-`} />
      </div>
    );
  }
}

export default CounterContainer;
