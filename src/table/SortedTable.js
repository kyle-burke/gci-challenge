import { connect } from 'react-redux';
import UserTable from './UserTable';

const mapStateToProps = state => ({
  users: []
});

const mapDispatchToProps = dispatch => ({});

const SortedTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTable);

export default SortedTable;
