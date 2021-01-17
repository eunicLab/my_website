const errorReducer = (state = '', action) => {
  switch (action.type) {
    case 'HANDLE_SIGN_UP_FAILED':
      return 'There is already an account with this email address';
    case 'HANDLE_LOGIN_FAILED':
      return 'Incorrect email address or password';
    case 'REQUIRED_FIELD_EMPTY':
      return 'Required field empty';
    case 'PRIVACY_POLICY':
      return 'You must agree to the privacy policy';
    case 'NO_ERROR':
      return '';
    default:
      return state;
  }
};
export default errorReducer;
