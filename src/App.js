import React, { Component } from 'react';
import './App.css';
//Es un componente de orden superior que heredará cosas a los hijos
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';

import TodoApp from './components/TodoAppComponent';
import AppBar from './components/AppBarComponent'


  
//Creando store que va a ser modificado -- reducer(todoApp)
let store = createStore(todoApp);


class App extends Component {
  render(){
    return(
      <Provider store={store}>
      	<AppBar />
      	<TodoApp />
      </Provider>
    );
  }
}


export default App;