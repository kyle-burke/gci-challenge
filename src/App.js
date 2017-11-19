import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Form } from './form';
import { SortedTable } from './table';
import app from './reducers';
import './App.css';

let store = createStore(app);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Form />
          <SortedTable />
        </div>
      </Provider>
    );
  }
}

export default App;
