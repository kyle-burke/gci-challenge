/**
 * Future improvements that could be made:
 * refactor out the columns/object keys so they aren't hardcoded.
 */
export const userTable = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          address: action.payload.address
        }
      ];
    default:
      return state;
  }
};
