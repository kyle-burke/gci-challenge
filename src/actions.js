export const addUser = (firstName, lastName, address) => ({
  type: 'ADD_USER',
  payload: {firstName, lastName, address}
});

export const removeUser = (id) => ({
  type: 'REMOVE_USER',
  payload: {id}
});

export const editUser = (id, firstName, lastName, address) => ({
  type: 'EDIT_USER',
  payload: {id, firstName, lastName, address}
});

export const toggleEdit = (id) => ({
  type: 'TOGGLE_EDIT',
  payload: {id}
});
