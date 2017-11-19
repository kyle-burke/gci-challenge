import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Grid, Col } from 'react-bootstrap';
import { UserTable, Form } from './table';
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
  render() {
    return (
      <Provider store={store}>
        <Grid>
          <Col xs={12} md={6}>
            <Form />
          </Col>
          <Col xs={12} md={6}>
            <UserTable />
          </Col>
        </Grid>
      </Provider>
    );
  }
}

export default App;
