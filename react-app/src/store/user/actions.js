import {
  GET_ALL_USER_ERROR,
  GET_ALL_USER_LOADING,
  GET_ALL_USER_SUCCESS,
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  GET_ALL_USER_THAT_I_DONT_FOLLOW_LOADING,
  GET_ALL_USER_THAT_I_DONT_FOLLOW_SUCCESS,
  GET_ALL_USER_THAT_I_DONT_FOLLOW_ERROR,
} from './constants';

const actGetUserSuccess = (payload) => ({
  type: GET_USER_SUCCESS,
  payload,
});

const actGetUserLoading = () => ({
  type: GET_USER_LOADING,
});

const actGetUserError = (payload) => ({
  type: GET_USER_ERROR,
  payload,
});

/**
 * @ GET: fetch one user detail
 * @param {*} id userId
 * @returns
 */
export const getUserProfile = (id) => async (dispatch) => {
  dispatch(actGetUserLoading());
  try {
    const response = await fetch(`/api/users/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const data = await response.json();
      if (data.errors) {
        dispatch(actGetUserError(data.errors));
        return;
      }
      dispatch(actGetUserSuccess(data));
    } else {
      dispatch(actGetUserError({ message: 'Something wrong ' }));
    }
  } catch (error) {
    dispatch(actGetUserError(error));
  }
};

const actAllUsersSuccess = (payload) => ({
  type: GET_ALL_USER_SUCCESS,
  payload,
});

const actAllUsersLoading = () => ({
  type: GET_ALL_USER_LOADING,
});

const actAllUsersError = (payload) => ({
  type: GET_ALL_USER_ERROR,
  payload,
});

const actAllUsersThatIDontFollowSuccess = (payload) => ({
  type: GET_ALL_USER_THAT_I_DONT_FOLLOW_SUCCESS,
  payload,
});

const actAllUsersThatIDontFollowLoading = () => ({
  type: GET_ALL_USER_THAT_I_DONT_FOLLOW_LOADING,
});

const actAllUsersThatIDontFollowError = (payload) => ({
  type: GET_ALL_USER_THAT_I_DONT_FOLLOW_ERROR,
  payload,
});

export const getAllUsers = () => async (dispatch) => {
  dispatch(actAllUsersLoading());
  try {
    const response = await fetch(`/api/users/`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(actAllUsersSuccess(data));
    } else {
      dispatch(actAllUsersError({ message: 'something wrong' }));
    }
  } catch (error) {
    dispatch(actAllUsersError(error));
  }
};

export const getAllUsersThatIDontFollow = () => async (dispatch) => {
  dispatch(actAllUsersThatIDontFollowLoading());
  try {
    const response = await fetch(`/api/users/notFollowed`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(actAllUsersThatIDontFollowSuccess(data));
    } else {
      dispatch(actAllUsersThatIDontFollowError({ message: 'something wrong' }));
    }
  } catch (error) {
    dispatch(actAllUsersThatIDontFollowError(error));
  }
};
