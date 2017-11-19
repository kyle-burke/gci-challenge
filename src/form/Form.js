import * as React from 'react';
import {
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';

export default class Form extends React.Component {
  // Static class members make a nice way to set default state
  state = {
    name: ''
  }

  handleFirstNameChange(e) {
    /**
     * My soapbox: Local state can be fine! You don't always need to turn to
     * Redux as the first solution to a state problem. No other part of the
     * application needs to know about the state of this form (yet). When it
     * becomes in our interest to make this form globally visible, we will
     * create a new substore and dispatch an action in the field onChanges.
     */
    this.setState({ firstName: e.target.value });
  }

  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value });
  }

  handleAddressChange(e) {
    this.setState({ address: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="newUserForm"
        >
          <ControlLabel>First Name</ControlLabel>
          <FormControl
            type="text"
            placeholder="Ada"
            value={this.state.firstName}
            onChange={(e) => this.handleFirstNameChange(e)}
          />
          <ControlLabel>Last Name</ControlLabel>
          <FormControl
            type="text"
            placeholder="Lovelace"
            value={this.state.lastName}
            onChange={(e) => this.handleLastNameChange(e)}
          />
          <ControlLabel>Address</ControlLabel>
          <FormControl
            type="text"
            placeholder="123 GCI Avenue"
            value={this.state.address}
            onChange={(e) => this.handleAddressChange(e)}
          />
        </FormGroup>
      </form>
    );
  }
}
