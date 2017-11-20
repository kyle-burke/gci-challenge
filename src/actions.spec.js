import { addUser, removeUser, editUser, toggleEdit } from './actions';

describe('actions', () => {
  it('addUser should create an action object', () => {
    const firstName = 'first name';
    const lastName = 'last name';
    const address = 'address';
    const expectedAction = {
      type: 'ADD_USER',
      payload: {firstName, lastName, address}
    };
    const action = addUser(firstName, lastName, address);

    expect(action).toEqual(expectedAction);
  });

  it('removeUser should create an action object', () => {
    const id = 10;

    const expectedAction = {
      type: 'REMOVE_USER',
      payload: {id}
    };

    const action = removeUser(id);

    expect(action).toEqual(expectedAction);
  });

  it('editUser should create an action object', () => {
    const firstName = 'first name';
    const lastName = 'last name';
    const address = 'address';
    const id = 10
    const expectedAction = {
      type: 'EDIT_USER',
      payload: {id, firstName, lastName, address}
    };
    const action = editUser(id, firstName, lastName, address);

    expect(action).toEqual(expectedAction);
  });

  it('toggleEdit should create an action object', () => {
    const id = 10;

    const expectedAction = {
      type: 'TOGGLE_EDIT',
      payload: {id}
    };

    const action = toggleEdit(id);

    expect(action).toEqual(expectedAction);
  });
});
