import React, { Component } from 'react';
import './App.css';
import MoviesContainer from './app/movies/components/MoviesContainer'

/**
 * https://redux.js.org/introduction/getting-started
 * 1. Tworzenie store - reducer i funkcja createStore co przyjmuje funkcjie.
 * 2. Wykonywanie akcji dispatch(obiekt z type) - rozpraszamy stan, by nie gubić całego obiektu. przykazywanie action.type w dispatch
 * 3. Redux DevTools - instalacja chrome + aktywacja w redux(by działała) z 'composeWithDevTools()' jako 2 parametr w createStore()
 * 4. Łączenie store( combineReducer({}) ) - przyjmuje obiekt z reducerami
 * 5. Kreatory akcji - zwykla funckja ktora opakowuje obiekt w dispatch, co by bylo czytelniej
 * 5a. bindActionCreators - fajniejszy sposob na rozdzielanie akcji, zeby nie spamowac 'store.dispatch'
 * 6. Struktura projektu - 
 * 7. react-redux - 
 * 
 */

//---
class App extends Component {
  render() {
    return (
      <div className="App">
        <MoviesContainer />
      </div>
    );
  }
}

export default App;
