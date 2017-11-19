import * as React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from 'react-bootstrap';

export default class Form extends React.Component {
  // Static class members make a nice way to set default state
  state = {
    firstName: '',
    lastName: '',
    address: ''
  }

  handleFirstNameChange = (e) => {
    /**
     * My soapbox: Local state can be fine! You don't always need to turn to
     * Redux as the first solution to a state problem. No other part of the
     * application needs to know about the state of this form (yet). When it
     * becomes in our interest to make this form globally visible, we will
     * create a new substore and dispatch an action in the field onChanges.
     */
    this.setState({ firstName: e.target.value });
  }

  handleLastNameChange = (e) => {
    this.setState({ lastName: e.target.value });
  }

  handleAddressChange = (e) => {
    this.setState({ address: e.target.value });
  }

  onSubmit = () => {
    this.props.onSubmit(
      this.state.firstName,
      this.state.lastName,
      this.state.address
    );
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="firstNameGroup"
        >
          <ControlLabel>First Name</ControlLabel>
          <FormControl
            type="text"
            placeholder="Ada"
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
          />
        </FormGroup>
        <FormGroup
          controlId="lastNameGroup"
        >
          <ControlLabel>Last Name</ControlLabel>
          <FormControl
            type="text"
            placeholder="Lovelace"
            value={this.state.lastName}
            onChange={this.handleLastNameChange}
          />
        </FormGroup>
        <FormGroup
          controlId="addressGroup"
        >
          <ControlLabel>Address</ControlLabel>
          <FormControl
            type="text"
            placeholder="123 GCI Avenue"
            value={this.state.address}
            onChange={this.handleAddressChange}
          />
        </FormGroup>
        <Button
          bsStyle="primary"
          onClick={this.onSubmit}
          disabled={
            !this.state.firstName ||
            !this.state.lastName ||
            !this.state.address
          }
        >
          Submit
        </Button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};
