const ALL_POSTS = 'post/ALL_POSTS';

const allPosts = (payload) => ({
  type: ALL_POSTS,
  payload
});

export const getAllPosts = () =>
  async (dispatch) => {
    const res = await fetch('/api/posts')

    if (res.ok) {
      const posts = await res.json();
      dispatch(allPosts(posts))
      return posts
    }
  };

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
