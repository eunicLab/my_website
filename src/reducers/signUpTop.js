const signUpTopReducer = (state = 'buttonTopActive', action) => {
  switch (action.type) {
    case 'HANDLE_TOP_SIGN_UP_BUTTON':
      return 'buttonTopActive';
    case 'HANDLE_TOP_LOGIN_BUTTON':
      return 'buttonTop';
    default:
      return state;
  }
};
export default signUpTopReducer;
