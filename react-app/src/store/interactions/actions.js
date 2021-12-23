import { COMMENT_FAIL, COMMENT_SUCCESS } from './constants';

const actCommentSuccess = (payload) => ({
  type: COMMENT_SUCCESS,
  payload,
});

const actCommentFail = (payload) => ({
  type: COMMENT_FAIL,
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

export const deleteComment = (data) => async (dispatch) => {
  try {
    const res = await fetch(`/api/comments/${data.id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      // TODO
    }
  } catch (error) {}
};

// toggle likes
// TODO: update like should send the post data that this like sending to
export const updateLike = (data) => async (dispatch) => {
  try {
    let res;
    if (data.id) {
      res = await fetch(`/api/likes/${data.id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      });
    } else {
      res = await fetch('/api/likes', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    }
    if (res.ok) {
      // TODO
    }
  } catch (error) {}
};

// toggle follow
// TODO: update follow should send the user data that interact with
export const updateFollow = (data) => async (dispatch) => {
  try {
    let res;
    if (data.id) {
      res = await fetch(`/api/follows/${data.id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      });
    } else {
      res = await fetch('/api/follows', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    }
    if (res.ok) {
      // TODO
    }
  } catch (error) {}
};
