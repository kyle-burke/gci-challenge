/**
 * We want to keep, where possible, a consistent components interface for other
 * folders to import from.
 */
import UserTable from './UserTable';
import TableRow from './TableRow';
import TableHead from './TableHead';
import SortedTable from './SortedTable';
import { addUser } from './table.actions';

export {
  UserTable,
  TableRow,
  TableHead,
  SortedTable,
  addUser
};
