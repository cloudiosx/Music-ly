import {
  COMMENT_FAIL,
  COMMENT_SUCCESS,
  DELETE_COMMENT_FAIL,
  DELETE_COMMENT_SUCCESS,
  FOLLOW_FAIL,
  FOLLOW_SUCCESS,
  LIKE_POST_FAIL,
  LIKE_POST_SUCCESS,
} from './constants';

const actCommentSuccess = (payload) => ({
  type: COMMENT_SUCCESS,
  payload,
});

const actCommentFail = (payload) => ({
  type: COMMENT_FAIL,
  payload,
});

const actDeleteCommentSuccess = (payload) => ({
  type: DELETE_COMMENT_SUCCESS,
  payload,
});

const actDeleteCommentFail = (payload) => ({
  type: DELETE_COMMENT_FAIL,
  payload,
});

const actToggleLikeSuccess = (payload) => ({
  type: LIKE_POST_SUCCESS,
  payload,
});

const actToggleLikeFail = (payload) => ({
  type: LIKE_POST_FAIL,
  payload,
});

const actToggleFollowSuccess = (payload) => ({
  type: FOLLOW_SUCCESS,
  payload,
});

const actToggleFollowFail = (payload) => ({
  type: FOLLOW_FAIL,
  payload,
});

/**
 * create/edit comment
 * @param {*} data {userId, postId, content, id, created_at}
 */
export const saveComment = (data) => async (dispatch, getState) => {
  console.log(data);
  console.log(getState().session.user);
  const currentUser = getState().session.user;
  try {
    let res;
    if (data.id) {
      res = await fetch(`/api/comments/${data.id}/edit`, {
        method: 'PUT',
        body: JSON.stringify(data),
      });
    } else {
      res = await fetch('/api/comments/new', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    }
    if (res.ok) {
      dispatch(actCommentSuccess({ message: 'error adding comment', data, currentUser }));
    } else {
      dispatch(actCommentFail({ message: 'error adding comment', data, currentUser }));
    }
  } catch (error) {
    dispatch(actCommentFail({ message: 'error adding comment', data, currentUser }));
  }
};

export const deleteComment = (id) => async (dispatch) => {
  try {
    const res = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      dispatch(actDeleteCommentSuccess(id));
    } else {
      dispatch(actDeleteCommentFail(id));
    }
  } catch (error) {
    dispatch(actDeleteCommentFail(id));
  }
};

// toggle likes
// {postId}
export const updateLike = (data) => async (dispatch) => {
  try {
    const res = await fetch(`/api/posts/${data.postId}/like`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
    if (res.ok) {
      dispatch(actToggleLikeSuccess(data));
    } else {
      dispatch(actToggleLikeFail(data));
    }
  } catch (error) {
    dispatch(actToggleLikeFail(data));
  }
};

// toggle follow
// {postId}
export const updateFollow = (data) => async (dispatch) => {
  try {
    const res = await fetch('/api/followers/new', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (res.ok) {
      // TODO
      dispatch(actToggleFollowSuccess(data));
    } else {
      dispatch(actToggleFollowFail(data));
    }
  } catch (error) {
    dispatch(actToggleFollowFail(data));
  }
};
