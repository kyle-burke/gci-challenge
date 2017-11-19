import { userTable } from './table.reducer';

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

    const state = userTable(undefined, action);

    expect(state).toEqual([action.payload]);
  });

  it('should add a user to a state with a user already existing', () => {
    const initialState = [
      {
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

    const state = userTable(initialState, action);

    expect(state).toEqual([...initialState, action.payload]);
  });
});
