//------------------------------------------------------------------------------
// Copyright (c) 2021.
//------------------------------------------------------------------------------
import React from 'react';
import Counter from './components/counter.js';
import NavBar from './components/navBar';
import './App.css';

class App extends React.Component {
  state = {
    // DOC: Source of truth in the top parent App component
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 3 },
      { id: 2, value: 1 },
    ],
  };

  constructor(props) {
    super(props);
    console.log('1. Constructor');
  }

  componentDidMount() {
    console.log('3. componentDidMount()');
  }

  handleReset = () => {
    const counters = this.state.counters.map((_c) => {
      _c.value = 0;
      return _c;
    });

    this.setState({ counters });
  };

  handleDelete = (id) => {
    const counters = this.state.counters.filter((_c) => _c.id !== id);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = this.state.counters; // DOC: Spread operator not useful to clone arrays
    const index = this.state.counters.indexOf(counter);
    counters[index] = { ...counter }; // DOC: Clone to prevent direct state mutation
    counters[index].value++;

    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = this.state.counters;
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;

    if (counters[index].value < 0) {
      counters[index].value = 0;
    }

    this.setState({ counters });
  };

  render() {
    console.log('2. render()');

    return this.state.counters.length === 0 ? (
      <p className="m-3">There are no counters!</p>
    ) : (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <button className="btn btn-dark my-3" onClick={this.handleReset}>
            Reset
          </button>
          {this.state.counters.map((_c) => (
            <Counter
              key={_c.id}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              counter={_c}
            >
              <span>{_c.id}</span> {/* DOC: Accessible by using 'this.props.children' */}
            </Counter>
          ))}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
