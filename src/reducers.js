import { combineReducers } from 'redux';
import { findIndex, propEq } from 'ramda';

export const findIndexByID = (id) => findIndex(propEq('id', id));
/**
 * Future improvements that could be made:
 * - refactor out the columns/object keys so they aren't hardcoded, so we
 *   can add columns as the API changes.
 * - less wonky way to handle id. random hash instead of incrementing integer?
 */
let id = 0;
export const userTable = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          id: id++,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          address: action.payload.address
        }
      ];
    case 'REMOVE_USER':
      let removeIndex = findIndexByID(action.payload.id)(state);
      return [
        ...state.slice(0, removeIndex),
        ...state.slice(removeIndex + 1)
      ];
    case 'EDIT_USER':
      let editIndex = findIndexByID(action.payload.id)(state);
      return [
        ...state.slice(0, editIndex),
        action.payload,
        ...state.slice(editIndex + 1)
      ];
    default:
      return state;
  }
};

export const editingUserID = (state = '', action) => {
  switch (action.type) {
    case 'TOGGLE_EDIT':
      if (action.payload.id === undefined) {
        return null;
      }
      return action.payload.id;
    default:
      return state;
  }
};

const app = combineReducers({userTable, editingUserID});

export default app;
