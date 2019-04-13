import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import { createStore, combineReducers, bindActionCreators } from 'redux';
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'

import { movieActions } from './app/movies/duck'


/**
 * https://redux.js.org/introduction/getting-started
 * 1. Tworzenie store - reducer i funkcja createStore co przyjmuje funkcjie.
 * 2. Wykonywanie akcji dispatch(obiekt z type) - rozpraszamy stan, by nie gubić całego obiektu. przykazywanie action.type w dispatch
 * 3. Redux DevTools - instalacja chrome + aktywacja w redux(by działała) z 'composeWithDevTools()' jako 2 parametr w createStore()
 * 4. Łączenie store( combineReducer({}) ) - przyjmuje obiekt z reducerami
 * 5. Kreatory akcji - zwykla funckja ktora opakowuje obiekt w dispatch, co by bylo czytelniej
 * 5a. bindActionCreators - fajniejszy sposob na rozdzielanie akcji, zeby nie spamowac 'store.dispatch'
 * 6. Struktura projektu - 
 * 
 */

//--- 6. New clear structure
const store = createStore(rootReducer, composeWithDevTools());
window.store = store;

store.dispatch( movieActions.add('Avatar') );


/** 6. */
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
