export default (state, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        info: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
