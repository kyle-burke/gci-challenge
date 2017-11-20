import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Grid, Col } from 'react-bootstrap';
import UserTable from './UserTable';
import Form from './Form';
import app from './reducers';
import './App.css';

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
          <Col className="appColumn" xs={12} md={6}>
            <Form />
          </Col>
          <Col className="appColumn" xs={12} md={6}>
            <UserTable />
          </Col>
        </Grid>
      </Provider>
    );
  }
}

export default App;
