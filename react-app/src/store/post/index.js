// This is the reducer file for POST

import { ALL_POSTS_LOADING, ALL_POSTS_SUCCESS, ALL_POSTS_ERROR } from "./constants";

const INITIAL_STATE = {
  allPosts: [],
  loadingAllPosts: false,
  errorLoadingAllPosts: null
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALL_POSTS_LOADING: {
      return {
        ...state,
        allPosts: [],
        loadingAllPosts: true,
        errorLoadingAllPosts: null
      }
    }
    case ALL_POSTS_SUCCESS: {
      return {
        ...state,
        allPosts: action.payload,
        loadingAllPosts: false,
        errorLoadingAllPosts: null
      }
    }
    case ALL_POSTS_ERROR: {
      return {
        ...state,
        allPosts: [],
        loadingAllPosts: false,
        errorLoadingAllPosts: action.payload
      }
    }
    default:
      return state
  }
};

export default postReducer;
