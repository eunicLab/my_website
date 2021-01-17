const stuffDataReducer = (state = '', action) => {
  switch (action.type) {
    case 'STUFF_DATA':
      return action.payload;

    default:
      return state;
  }
};
export default stuffDataReducer;
