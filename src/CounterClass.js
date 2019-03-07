import React, { Component } from 'react'

class CounterClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
    this.incrementCounter = this.incrementCounter.bind(this)
  }

  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <div>
        <h1>Counter Class: {this.state.counter}</h1>
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    )
  }
}

export default CounterClass
