import React, { Component, Fragment } from 'react';
import { Button } from '../components/button';
import { Counter } from '../components/counter';

class counterContainer extends Component {
  render() {
    return (
      <Fragment>
        <Button content={`+`} />
        <Counter number={0} />
        <Button content={`-`} />
      </Fragment>
    );
  }
}

export default counterContainer;
