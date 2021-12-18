import { REMOVE_USER, SET_USER_ERROR, SET_USER_LOADING, SET_USER_SUCCESS } from "./constants";

const actSetUserLoading = () => ({
  type: SET_USER_LOADING,
});

const actSetUserSuccess = (user) => ({
  type: SET_USER_SUCCESS,
  payload: user
});

const actSetUserError = (payload) => ({
  type: SET_USER_ERROR,
  payload
});

const actRemoveUser = () => ({
  type: REMOVE_USER,
});

export const authenticate = () => async (dispatch) => {
  dispatch(actSetUserLoading());

  try {
    const response = await fetch('/api/auth/', {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const data = await response.json();

      if (data.errors) {
        dispatch(actSetUserError(data.errors));
        return;
      }

      dispatch(actSetUserSuccess(data));
    }

  } catch (error) {
    dispatch(actSetUserError(error))
  }
}

export const login = (email, password) => async (dispatch) => {
  dispatch(actSetUserLoading());

  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(actSetUserSuccess(data));
      return null;
    } else if (response.status < 500) {
      const data = await response.json();

      if (data.errors) {
        dispatch(actSetUserError(data.errors));
        return data.errors;
      }

      dispatch(actSetUserSuccess(data));
    } else {
      dispatch(actSetUserError({ message: 'Something went wrong' }))
      return ['An error occurred. Please try again.']
    }

  } catch (error) {
    dispatch(actSetUserError(error))
  }

}

export const logout = () => async (dispatch) => {
  try {
    const response = await fetch('/api/auth/logout', {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.ok) {
      dispatch(actRemoveUser());
    }

  } catch (error) {
    dispatch(actRemoveUser());
  }
};


export const signUp = (formData) => async (dispatch) => {
  dispatch(actSetUserLoading());

  try {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(actSetUserSuccess(data));
      return null;
    } else if (response.status < 500) {
      const data = await response.json();
      if (data.errors) {
        dispatch(actSetUserError(data.errors));
        return data.errors;
      }
      dispatch(actSetUserSuccess(data));
    } else {
      dispatch(actSetUserError({ message: 'Something went wrong' }));
      return ['An error occurred. Please try again.'];
    }

  } catch (error) {
    dispatch(actSetUserError(error));
  }
}
