const displayPostReducer = (state = 'noDisplay', action) => {
  switch (action.type) {
    case 'DISPLAY_POST':
      return action.payload;

    default:
      return state;
  }
};
export default displayPostReducer;
