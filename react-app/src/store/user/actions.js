import { GET_USER_ERROR, GET_USER_LOADING, GET_USER_SUCCESS } from "./constants";

const actGetUserSuccess = (payload) => ({
  type: GET_USER_SUCCESS,
  payload
})

const actGetUserLoading = () => ({
  type: GET_USER_LOADING,
})

const actGetUserError = (payload) => ({
  type: GET_USER_ERROR,
  payload
})

/**
 * @ GET: fetch one user detail
 * @param {*} id userId
 * @returns
 */

export const getUserProfile = (id) => async (dispatch) => {
  dispatch(actGetUserLoading());
  try {
    const res = await fetch(`/api/user/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      const data = await res.json();
      if (data.errors) {
        dispatch(actGetUserError(data.errors));
        return;
      }
      dispatch(actGetUserSuccess(data));
    }
  } catch (error) {
    dispatch(actGetUserError(error));
  }
}
