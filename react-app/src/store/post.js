

const postReducer = (state = {}, action) => {
  switch (action.type) {
    case ALL_POSTS: {
      return {
        ...state,
        allPosts: action.payload
      }
    }
    default:
      return state
  }
};

export default postReducer;
