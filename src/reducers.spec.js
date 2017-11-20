import { userTable, editingUserID } from './reducers';

describe('userTable reducer', () => {
  it('should return default state', () => {
    const state = userTable(undefined, {payload: {}});

    expect(state).toEqual([]);
  });

  it('should add a user to a new state', () => {
    const action = {
      type: 'ADD_USER',
      payload: {
        firstName: 'first name',
        lastName: 'last name',
        address: 'address'
      }
    };

    const expectedUser = {
      id: 0,
      firstName: 'first name',
      lastName: 'last name',
      address: 'address'
    };

    const state = userTable(undefined, action);

    expect(state).toEqual([expectedUser]);
  });

  it('should add a user to a state with a user already existing', () => {
    const initialState = [
      {
        id: 0,
        firstName: 'initial first name',
        lastName: 'initial last name',
        address: 'address'
      }
    ];
    const action = {
      type: 'ADD_USER',
      payload: {
        firstName: 'first name',
        lastName: 'last name',
        address: 'address'
      }
    };

    const expectedNewUser = {
      id: 1,
      firstName: 'first name',
      lastName: 'last name',
      address: 'address'
    }

    const state = userTable(initialState, action);

    expect(state).toEqual([...initialState, expectedNewUser]);
  });

  it('should remove a user', () => {
    const initialState = [
      {
        id: 0
      }
    ];

    const action = {
      type: 'REMOVE_USER',
      payload: {
        id: 0
      }
    };

    const state = userTable(initialState, action);

    expect(state.length).toEqual(0);
  });

  it('should edit an existing user', () => {
    const initialState = [
      { id: 0 },
      {
        id: 1,
        firstName: 'first name'
      },
      { id: 2 }
    ];

    const action = {
      type: 'EDIT_USER',
      payload: {
        id: 1,
        firstName: 'new name'
      }
    };

    const expectedState = [
      { id: 0 },
      {
        id: 1,
        firstName: 'new name'
      },
      { id: 2 }
    ];

    expect(userTable(initialState, action)).toEqual(expectedState);
  });
});

describe('editingUserID', () => {
  it('should set initial state', () => {
    const state = editingUserID(undefined, {});

    expect(state).toEqual('');
  });

  it('should set state on toggle edit', () => {
    const action = {
      type: 'TOGGLE_EDIT',
      payload: {
        id: 4
      }
    };

    const state = editingUserID(undefined, action);

    expect(state).toEqual(4);
  });

  it('should set state to null if action does not have an id', () => {
    const action = {
      type: 'TOGGLE_EDIT',
      payload: {}
    };

    const state = editingUserID(undefined, action);

    expect(state).toEqual(null);
  });
});
