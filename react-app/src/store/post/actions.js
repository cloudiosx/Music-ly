import {
  ALL_POSTS_SUCCESS,
  ALL_POSTS_LOADING,
  ALL_POSTS_ERROR,
  ONE_POST_SUCCESS,
  ONE_POST_LOADING,
  ONE_POST_ERROR,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR
} from './constants'

// All Posts

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

// Single Post

const actGetOnePostLoading = () => ({
  type: ONE_POST_LOADING,
});

const actGetOnePostSuccess = (payload) => ({
  type: ONE_POST_SUCCESS,
  payload
});

const actGetOnePostError = (payload) => ({
  type: ONE_POST_ERROR,
  payload
});

export const getOnePost = (id) => async (dispatch) => {
  dispatch(actGetOnePostLoading());
  try {
    const res = await fetch(`/api/posts/${id}`);
    if (res.ok) {
      const post = await res.json();
      dispatch(actGetOnePostSuccess(post));
      return post;
    }
    dispatch(actGetOnePostError({ message: 'something wrong' }));
  } catch (error) {
    dispatch(actGetOnePostError(error));
  }
}

export const savePost = (data) => async (dispatch) => {
  try {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    let res;
    if (data.id) {
      res = await fetch(`/api/posts/${data.id}`, {
        method: 'PUT',
        body: formData
      });
    } else {
      res = await fetch(`/api/posts/`, {
        method: 'POST',
        body: formData
      });
    }

    if (res.ok) {
      const post = await res.json();
      dispatch(actGetOnePostSuccess(post));
      return post;
    }
  } catch (error) {
    dispatch(actGetOnePostError(error));
  }
}

// Delete Post

const actDeletePostSuccess = (payload) => ({
  type: DELETE_POST_SUCCESS,
  payload
});

const actDeletePostError = (payload) => ({
  type: DELETE_POST_ERROR,
  payload
});

export const deletePost = (id) => async (dispatch) => {
  try {
    const res = await fetch(`/api/posts/${id}`, {
      method: 'DELETE'
    });

    if (res.ok) {
      const post = await res.json();
      dispatch(actDeletePostSuccess(post));
      return post;
    }
    dispatch(actDeletePostError({ message: 'Something went wrong' }));
  } catch (error) {
    dispatch(actDeletePostError(error));
  }
}
