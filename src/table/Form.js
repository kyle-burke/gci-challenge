import * as React from 'react';
import PropTypes from 'prop-types';
import { findIndexByID } from '../table/table.reducer';
import { addUser, editUser, toggleEdit } from '../table/table.actions';
import { connect } from 'react-redux';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from 'react-bootstrap';

class Form extends React.Component {
  // Static class members make a nice way to set default state
  state = {
    firstName: '',
    lastName: '',
    address: ''
  }

  componentWillReceiveProps({editingUser}) {
    if (editingUser) {
      this.setState({
        firstName: editingUser.firstName,
        lastName: editingUser.lastName,
        address: editingUser.address
      });
    }
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

  onCreate = () => {
    this.props.createUser(
      this.state.firstName,
      this.state.lastName,
      this.state.address
    );
    this.resetState();
  }

  onEdit = () => {
    this.props.editUser(
      this.props.editingUser.id,
      this.state.firstName,
      this.state.lastName,
      this.state.address
    );
    this.props.cancelEdit();
    this.resetState();
  }

  onCancel = () => {
    this.props.cancelEdit();
    this.resetState();
  }

  resetState() {
    this.setState({
      firstName: '',
      lastName: '',
      address: ''
    });
  }

  render() {
    let cancelButton = (
      <Button
        bsStyle="default"
        onClick={this.onCancel}
      >
        Cancel
      </Button>
    );
    let createButton = (
      <Button
        bsStyle="primary"
        onClick={this.onCreate}
        disabled={
          !this.state.firstName ||
          !this.state.lastName ||
          !this.state.address
        }
      >
        Create
      </Button>
    );
    let editButton = (
      <Button
        bsStyle="primary"
        onClick={this.onEdit}
        disabled={
          !this.state.firstName ||
          !this.state.lastName ||
          !this.state.address
        }
      >
        Update
      </Button>
    );

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
        {this.props.editingUser ? editButton : createButton}
        {this.props.editingUser ? cancelButton : null}
      </form>
    );
  }
}

Form.propTypes = {
  createUser: PropTypes.func,
  editUser: PropTypes.func,
  cancelEdit: PropTypes.func,
  editingUser: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
    id: PropTypes.number,
  })
};

const mapStateToProps = (state) => ({
  editingUser: state.userTable[findIndexByID(state.editingUserID)(state.userTable)]
});

const mapDispatchToProps = (dispatch) => ({
  createUser: (first, last, address) => {
    return dispatch(addUser(first, last, address));
  },
  editUser: (first, last, address, id) => {
    return dispatch(editUser(first, last, address, id));
  },
  cancelEdit: () => {
    return dispatch(toggleEdit());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
