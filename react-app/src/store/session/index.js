import { REMOVE_USER, SET_USER_LOADING, SET_USER_ERROR, SET_USER_SUCCESS } from './constants';

const initialState = { user: null, loadingUser: false, errorUser: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loadingUser: false,
        errorUser: null,
      };
    case SET_USER_LOADING:
      return {
        ...state,
        user: null,
        loadingUser: true,
        errorUser: null,
      };
    case SET_USER_ERROR:
      return {
        ...state,
        user: null,
        loadingUser: false,
        errorUser: action.payload,
      };
    case REMOVE_USER:
      return initialState;
    default:
      return state;
  }
}
