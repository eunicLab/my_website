const loadingImageReducer = (state = 'noDisplay', action) => {
  switch (action.type) {
    case 'LOADING':
      return 'loadingImage';
    case 'NOT_LOADING':
      return 'noDisplay';
    default:
      return state;
  }
};
export default loadingImageReducer;
