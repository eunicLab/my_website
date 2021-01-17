const loginDataReducer = (state = { email: '', token: '' }, action) => {
  switch (action.type) {
    case 'SEND_LOGIN_DATA':
      return action.payload;

    default:
      return state;
  }
};
export default loginDataReducer;
