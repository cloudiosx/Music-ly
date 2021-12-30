import {
  ALL_POSTS_ERROR,
  ALL_POSTS_LOADING,
  ALL_POSTS_SUCCESS,
  DELETE_POST_ERROR,
  DELETE_POST_SUCCESS,
  ONE_POST_ERROR,
  ONE_POST_LOADING,
  ONE_POST_SUCCESS,
} from './constants';

const actGetAllPostsLoading = () => ({
  type: ALL_POSTS_LOADING,
});

const actGetAllPostsSuccess = (payload) => ({
  type: ALL_POSTS_SUCCESS,
  payload,
});

const actGetAllPostsError = (payload) => ({
  type: ALL_POSTS_ERROR,
  payload,
});

// get all posts
export const getAllPosts = () => async (dispatch, option) => {
  dispatch(actGetAllPostsLoading());
  try {
    const res = await fetch('/api/posts/');

    if (res.ok) {
      const posts = await res.json();
      dispatch(actGetAllPostsSuccess(posts));
      return posts;
    }
    dispatch(actGetAllPostsError({ message: 'something wrong' }));
  } catch (error) {
    dispatch(actGetAllPostsError(error));
  }
};

const actGetOnePostLoading = () => ({
  type: ONE_POST_LOADING,
});

const actOnePostSuccess = (payload) => ({
  type: ONE_POST_SUCCESS,
  payload,
});

const actGetOnePostError = (payload) => ({
  type: ONE_POST_ERROR,
  payload,
});

// get one post
export const getOnePost = (id) => async (dispatch) => {
  dispatch(actGetOnePostLoading());
  try {
    const res = await fetch(`/api/posts/${id}`);

    if (res.ok) {
      const post = await res.json();
      dispatch(actOnePostSuccess(post));
      return post;
    }
    dispatch(actGetOnePostError({ message: 'something wrong' }));
  } catch (error) {
    dispatch(actGetOnePostError(error));
  }
};

// save one Post (edit/create)
// { caption, file, topic, allows, music }
export const savePost = (data) => async (dispatch) => {
  try {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    let res;
    if (data.id) {
      res = await fetch(`/api/posts/${data.id}/edit/`, {
        method: 'PUT',
        body: formData,
      });
    } else {
      res = await fetch(`/api/posts/new`, {
        method: 'POST',
        body: formData,
      });
    }

    if (res.ok) {
      const post = await res.json();
      // TODO: check when integrate
      // the idea now is that we return the whole post data then
      // it's update to the store
      // then it's also auto update to the UI
      dispatch(actOnePostSuccess(post));
      return post;
    }
  } catch (error) {
    // TODO: update when integrate
  }
};

const actDeletePostSuccess = (payload) => ({
  type: DELETE_POST_SUCCESS,
  payload,
});

const actDeletePostError = (payload) => ({
  type: DELETE_POST_ERROR,
  payload,
});

// delete one Post
export const deletePost = (id) => async (dispatch) => {
  try {
    const res = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      await res.json();
      dispatch(actDeletePostSuccess(id));
      return;
    }
    dispatch(actDeletePostError({ message: 'Something went wrong' }));
  } catch (error) {
    // TODO: update when integrate
    dispatch(actDeletePostError(error));
  }
};
