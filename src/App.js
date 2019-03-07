import React, { Component } from 'react'
import CounterClass from './CounterClass'
import CounterHooks from './CounterHooks'
import CounterReducerHook from "./CounterReducerHook"

class App extends Component {
  render() {
    return (
      <>
        {/* <CounterClass />
        <CounterHooks /> */}
        <CounterReducerHook/>
      </>
    )
  }
}

export default App
