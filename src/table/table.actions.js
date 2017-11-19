export const addUser = (firstName, lastName, address) => ({
  type: 'ADD_USER',
  payload: {firstName, lastName, address}
});
