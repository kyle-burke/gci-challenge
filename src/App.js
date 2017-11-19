import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Form } from './form';
import { SortedTable, addUser } from './table';
import app from './reducers';

let store = createStore(
  // our combined reducers
  app,
  // initial state
  undefined,
  // redux devtools make life better
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends React.Component {
  onFormSubmit = (firstName, lastName, address) => {
    store.dispatch(addUser(firstName, lastName, address));
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Form onSubmit={this.onFormSubmit} />
          <SortedTable />
        </div>
      </Provider>
    );
  }
}

export default App;
