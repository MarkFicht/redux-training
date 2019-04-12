import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialChars = {
  name: 'Favourite characters',
  characters: [
    'Goku', 'Vegeta'
  ]
}

const initialMovies = {
  name: 'Movies',
  movies: [
    'dbz', 'dbgt'
  ]
}

/**
 * 1. Tworzenie store - reducer i funkcja createStore co przyjmuje funkcjie.
 * 2. Wykonywanie akcji dispatch(obiekt z type) - rozpraszamy stan, by nie gubić całego obiektu. przykazywanie action.type w dispatch
 * 3. Redux DevTools - Instalacja chrome + aktywacja w redux(by działała) z 'composeWithDevTools()' jako 2 parametr w createStore()
 * 4. Łączenie store(combineReducer) - 
 * 
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
    case 'ADD_CHARACTER':
      return {
        ...state, characters: [...state.characters, action.character]
      }
    case 'RESET_CHARACTERS':
      return {
        ...state, characters: []
      }
    default:
      return state
  }
}

function movies( state = initialMovies, action ) {
  switch(action.type) {
    case 'ADD_MOVIE':
      return {
        ...state, movies: [...state.movies, action.movie]
      }
    case 'RESET_MOVIES':
      return {
        ...state, movies: []
      }
    default:
      return state
  }
}

//---
// const allReducers = combineReducers({ heros: characters, movies })
const allReducers = combineReducers({ characters, movies })

//---
const store = createStore(allReducers, composeWithDevTools());
window.store = store;

/** 1. */
console.log( window.store.getState() );

/** 2. */
// console.log( window.store.dispatch({ type: 'RESET' }) );
// console.log( window.store.dispatch({ type: 'ADD_TEST' }) );
// console.log( window.store.dispatch({ type: 'ADD', character: 'Gohan' }) );
// console.log( window.store.getState() );

/** 4. */
console.log( window.store.dispatch({ type: 'ADD_CHARACTER', character: 'Gohan' }) );
console.log( window.store.dispatch({ type: 'ADD_MOVIE', movie: 'dbs' }) );
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
