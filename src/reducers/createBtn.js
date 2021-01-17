const createBtnReducer = (state = 'Create Account', action) => {
  switch (action.type) {
    case 'HANDLE_TOP_SIGN_UP_BUTTON':
      return 'Create Account';
    case 'HANDLE_TOP_LOGIN_BUTTON':
      return 'Login';
    default:
      return state;
  }
};
export default createBtnReducer;
