import { combineReducers } from 'redux';
import { userTable, editingUserID } from './table/table.reducer';

const app = combineReducers({userTable, editingUserID});

export default app;
