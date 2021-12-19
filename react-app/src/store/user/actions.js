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
    const response = await fetch(`/api/user/${id}`, {
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
    }
  } catch (error) {
    dispatch(actGetUserError(error));
  }
}
