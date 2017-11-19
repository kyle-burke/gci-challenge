import * as React from 'react';
import { Table } from 'react-bootstrap';
import TableRow from './TableRow';
import TableHead from './TableHead';

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

const UserTable = ({users}) => {
  const rows = users.map(user => <TableRow row={user} />);
  return (
    <Table bordered condensed>
      <TableHead data={users} />
      <tbody>
        {rows}
      </tbody>
    </Table>
  )
  return <div />;
};

export default UserTable;
