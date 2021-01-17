const commentDataReducer = (state = '', action) => {
  switch (action.type) {
    case 'COMMENT_DATA':
      return action.payload;

    default:
      return state;
  }
};
export default commentDataReducer;
