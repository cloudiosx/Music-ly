import deepClone from '../../util/deepClone';
import { FOLLOW_FAIL, FOLLOW_SUCCESS } from '../interactions/constants';
import {
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_ERROR,
  GET_ALL_USER_LOADING,
  GET_ALL_USER_THAT_I_DONT_FOLLOW_LOADING,
  GET_ALL_USER_THAT_I_DONT_FOLLOW_SUCCESS,
  GET_ALL_USER_THAT_I_DONT_FOLLOW_ERROR,
} from './constants';

const initialState = {
  userProfile: null,
  loadingUserProfile: false,
  errorUserProfile: null,

  allUsers: [],
  loadingAllUsers: false,
  errorAllUsers: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
        loadingUserProfile: false,
        errorUserProfile: null,
      };
    case GET_USER_LOADING:
      return {
        ...state,
        userProfile: null,
        loadingUserProfile: true,
        errorUserProfile: null,
      };
    case GET_USER_ERROR:
      return {
        ...state,
        userProfile: null,
        loadingUserProfile: false,
        errorUserProfile: action.payload,
      };

    // get all Users
    case GET_ALL_USER_SUCCESS:
      return {
        ...state,
        allUsers: action.payload,
        loadingAllUsers: false,
        errorAllUsers: null,
      };
    case GET_ALL_USER_LOADING:
      return {
        ...state,
        allUsers: [],
        loadingAllUsers: true,
        errorAllUsers: null,
      };
    case GET_ALL_USER_ERROR:
      return {
        ...state,
        allUsers: [],
        loadingAllUsers: false,
        errorAllUsers: action.payload,
      };
    // get all Users that I don't follow
    case GET_ALL_USER_THAT_I_DONT_FOLLOW_SUCCESS:
      return {
        ...state,
        allUsers: action.payload,
        loadingAllUsers: false,
        errorAllUsers: null,
      };
    case GET_ALL_USER_THAT_I_DONT_FOLLOW_LOADING:
      return {
        ...state,
        allUsers: [],
        loadingAllUsers: true,
        errorAllUsers: null,
      };
    case GET_ALL_USER_THAT_I_DONT_FOLLOW_ERROR:
      return {
        ...state,
        allUsers: [],
        loadingAllUsers: false,
        errorAllUsers: action.payload,
      };

    // follow/unFollow on profile page,
    case FOLLOW_SUCCESS: {
      const { userId } = action.payload;
      const userProfile = deepClone(state.userProfile);

      if (userProfile?.id?.toString() === userId.toString()) {
        userProfile.isFollowed = !userProfile.isFollowed;
      }

      return {
        ...state,
        userProfile,
      };
    }
    case FOLLOW_FAIL: {
      // TODO: handle error follow profiles
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
