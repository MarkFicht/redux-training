import React, { Component } from 'react';
import './App.css';
import MoviesContainer from './app/movies/components/MoviesContainer'
import MoviesForm from './app/movies/components/MoviesForm'

/**
 * https://redux.js.org/introduction/getting-started
 * 1. Tworzenie store - reducer i funkcja createStore co przyjmuje funkcjie.
 * 2. Wykonywanie akcji dispatch(obiekt z type) - rozpraszamy stan, by nie gubić całego obiektu. przykazywanie action.type w dispatch
 * 3. Redux DevTools - instalacja chrome + aktywacja w redux(by działała) z 'composeWithDevTools()' jako 2 parametr w createStore()
 * 4. Łączenie store( combineReducer({}) ) - przyjmuje obiekt z reducerami
 * 5. Kreatory akcji - zwykla funckja ktora opakowuje obiekt w dispatch, co by bylo czytelniej
 * 5a. bindActionCreators - fajniejszy sposob na rozdzielanie akcji, zeby nie spamowac 'store.dispatch'
 * 6. Struktura projektu - dir 'duck', logicznie podzielona kazda kolekcja danych
 * 7. react-redux - connect() + podzial stora i rootReducer, ktory umieszczamy na starcie w index.js
 * 8. dispatch() przez React - 
 */

//---
class App extends Component {
  render() {
    return (
      <div className="App">
        <MoviesContainer />
        <MoviesForm />
      </div>
    );
  }
}

export default App;
