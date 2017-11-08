import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { increment, decrement } from '../actions/';

const Counter = ({
  counter,
  increment,
  decrement
}) => (
  <div className="Counter">
    <hr />
    <h1>{counter}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
);

const mapStateToProps = ({ counter }) => ({ counter });
const mapDispatchToProps = dispatch => bindActionCreators({ increment, decrement }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
