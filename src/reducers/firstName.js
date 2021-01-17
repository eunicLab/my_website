const firstNameReducer = (state = 'firstName', action) => {
  switch (action.type) {
    case 'HANDLE_TOP_SIGN_UP_BUTTON':
      return 'firstName';
    case 'HANDLE_TOP_LOGIN_BUTTON':
      return 'noDisplay';
    default:
      return state;
  }
};
export default firstNameReducer;
