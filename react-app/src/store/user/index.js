import { GET_USER_ERROR, GET_USER_LOADING, GET_USER_SUCCESS } from "./constants";

const initialState = { userProfile: null, loadingUserProfile: false, errorUserProfile: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
        loadingUserProfile: false,
        errorUserProfile: null,
      }
    case GET_USER_LOADING:
      return {
        ...state,
        userProfile: null,
        loadingUserProfile: true,
        errorUserProfile: null,
      }
    case GET_USER_ERROR:
      return {
        ...state,
        userProfile: null,
        loadingUserProfile: false,
        errorUserProfile: action.payload,
      }
    default:
      return state;
  }
}
