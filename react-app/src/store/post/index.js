// This is the reducer file for POST

import {
  ALL_POSTS_SUCCESS,
  ALL_POSTS_LOADING,
  ALL_POSTS_ERROR,
  ONE_POST_SUCCESS,
  ONE_POST_LOADING,
  ONE_POST_ERROR,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR
} from './constants'

const INITIAL_STATE = {
  allPosts: [],
  loadingAllPosts: false,
  errorLoadingAllPosts: null,

  postDetail: {},
  loadingPostDetail: false,
  errorPostDetail: null
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // All Posts
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
    // Single Post
    case ONE_POST_LOADING: {
      return {
        ...state,
        postDetail: {},
        loadingPostDetail: true,
        errorPostDetail: null
      }
    }
    case ONE_POST_SUCCESS: {
      return {
        ...state,
        postDetail: action.payload,
        loadingPostDetail: false,
        errorPostDetail: null
      }
    }
    case ONE_POST_ERROR: {
      return {
        ...state,
        postDetail: {},
        loadingPostDetail: false,
        errorPostDetail: action.payload
      }
    }
    // Delete Post
    case DELETE_POST_SUCCESS: {
      return {
        ...state,
      }
    }
    case DELETE_POST_ERROR: {
      return {
        ...state,
      }
    }
    default:
      return state
  }
};

export default postReducer;
