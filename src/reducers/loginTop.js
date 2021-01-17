const loginTopReducer = (state = 'buttonTop', action) => {
  switch (action.type) {
    case 'HANDLE_TOP_SIGN_UP_BUTTON':
      return 'buttonTop';
    case 'HANDLE_TOP_LOGIN_BUTTON':
      return 'buttonTopActive';
    default:
      return state;
  }
};
export default loginTopReducer;
