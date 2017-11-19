import * as React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import TableRow from './TableRow';
import TableHead from './TableHead';
import { editUser, removeUser, toggleEdit } from './table.actions';

/**
 * Stateless functional components provide us with a very concise way to
 * declare components that don't have internal state. However, it is sometimes
 * recommended to declare these components as function declarations, instead of
 * function expressions, like so:
 * function UserTable() {
 *   return <div />;
 * }
 * This is because when an error stack trace is printed to the console, the ES6
 * function component will be read as anonymous, where the function declaration
 * is named. I personally prefer the terseness of the ES6 syntactic sugar, and
 * haven't encountered enough anonymous stack traces to justify this style
 * change.
 */
const UserTable = ({users, onEdit, onRemove}) => {
  const rows = users.map(user => (
    <TableRow
      key={user.id}
      row={user}
      onEdit={onEdit}
      onRemove={onRemove}
    />
  ));
  return (
    <Table bordered striped>
      <TableHead />
      <tbody>
        {rows}
      </tbody>
    </Table>
  );
};

const mapStateToProps = state => ({
  users: state.userTable
});

const mapDispatchToProps = dispatch => ({
  onEdit: (id) => dispatch(toggleEdit(id)),
  onRemove: (id) => dispatch(removeUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTable);
