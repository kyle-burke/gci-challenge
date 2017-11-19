import { combineReducers } from 'redux';
import { userTable } from './table/table.reducer';

const app = combineReducers({userTable});

export default app;
