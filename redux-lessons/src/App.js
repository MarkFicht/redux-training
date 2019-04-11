import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux';

const initialChars = {
  name: 'Favourite characters',
  characters: [
    'Goku',
    'Vegeta'
  ]
}

/**
 * 1. Tworzenie store - reducer i funkcja createStore co przyjmuje funkcjie.
 * 2. Wykonywanie akcji dispatch(obiekt z type) - rozpraszamy stan, by nie gubić całego obiektu. przykazywanie action.type w dispatch
 */

//---
/** Reducer */
// function counter(state = 0, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }

function characters( state = initialChars, action ) {
  switch (action.type) {
    case 'ADD_TEST':
      return {
        ...state, characters: [...state.characters, 'Piccolo']
      }
    case 'ADD':
      return {
        ...state, characters: [...state.characters, action.character]
      }
    case 'RESET':
      return {
        ...state, characters: []
      }
    default:
      return state
  }
}

//---
const store = createStore(characters);
window.store = store;

/** 1. */
console.log( window.store.getState() );

/** 2. */
// console.log( window.store.dispatch({ type: 'RESET' }) );
console.log( window.store.dispatch({ type: 'ADD_TEST' }) );
console.log( window.store.dispatch({ type: 'ADD', character: 'Gohan' }) );
console.log( window.store.getState() );




//---
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
