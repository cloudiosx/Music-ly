import { ALL_POSTS_SUCCESS, ALL_POSTS_LOADING, ALL_POSTS_ERROR } from './constants'

const actGetAllPostsLoading = () => ({
  type: ALL_POSTS_LOADING,
});

const actGetAllPostsSuccess = (payload) => ({
  type: ALL_POSTS_SUCCESS,
  payload
});

const actGetAllPostsError = (payload) => ({
  type: ALL_POSTS_ERROR,
  payload
});

export const getAllPosts = () => async (dispatch) => {
  dispatch(actGetAllPostsLoading());

  try {
    const res = await fetch('/api/posts/');

    if (res.ok) {
      const posts = await res.json();
      dispatch(actGetAllPostsSuccess(posts));
      return posts;
    }

    dispatch(actGetAllPostsError({ messsage: 'something wrong' }));
  } catch (error) {
    dispatch(actGetAllPostsError(error));
  }
};
