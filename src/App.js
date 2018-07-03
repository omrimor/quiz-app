import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import configureStore from './configureStore';
import Quiz from './Quiz'

class App extends Component {
  render() {
    const store = configureStore({});
    return (
      <Provider store={store}>
        <Quiz />
      </Provider>
    );
  }
}

export default App;
