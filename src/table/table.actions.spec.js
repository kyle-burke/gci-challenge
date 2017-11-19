import { addUser } from './table.actions';

describe('table actions', () => {
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
});
