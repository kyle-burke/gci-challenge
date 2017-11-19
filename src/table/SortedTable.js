import { connect } from 'react-redux';
import UserTable from './UserTable';

const mapStateToProps = state => ({
  users: state.userTable
});

const mapDispatchToProps = dispatch => ({});

const SortedTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTable);

export default SortedTable;
