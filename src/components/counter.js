//------------------------------------------------------------------------------
// Copyright (c) 2021.
//------------------------------------------------------------------------------
import React, { Component } from 'react';

class Counter extends Component {
  handleBadgeClasses = () => {
    let classes = 'badge p-2 bg-';
    classes += this.props.counter.value === 0 ? 'dark' : 'warning';

    return classes;
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value !== this.props.counter.value) {
      console.log('Get data from the server');
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount...counter deleted');
  }

  render() {
    const { counter, onDecrement, onIncrement, onDelete, children } = this.props;

    return (
      <div className="mb-3">
        <button className="btn btn-danger me-3 fw-bolder" onClick={() => onDecrement(counter)}>
          -
        </button>
        <button className="btn btn-primary me-3 fw-bolder" onClick={() => onIncrement(counter)}>
          +
        </button>
        <span className={this.handleBadgeClasses()}>{counter.value}</span>
        <button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-sm ms-2">
          Delete
        </button>
        <span className="ms-3">Counter {children}</span>
      </div>
    );
  }
}

export default Counter;
