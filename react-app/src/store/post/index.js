/**
 * This is the reducer file for POST
 */
 import {
  ALL_POSTS_LOADING,
  ALL_POSTS_SUCCESS,
  ALL_POSTS_ERROR,
  ONE_POST_ERROR,
  ONE_POST_SUCCESS,
  ONE_POST_LOADING,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
} from './constants';
import { COMMENT_SUCCESS, COMMENT_FAIL } from '../interactions/constants';

// declare init state, it should have default value type as expected data type
const INITIAL_STATE = {
  allPosts: [],
  loadingAllPosts: false,
  errorAllPosts: null,

  postDetail: {},
  loadingPostDetail: false,
  errorPostDetail: null,
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALL_POSTS_LOADING: {
      return {
        ...state,
        allPosts: [],
        loadingAllPosts: true,
        errorAllPosts: null,
      };
    }
    case ALL_POSTS_SUCCESS: {
      return {
        ...state,
        loadingAllPosts: false,
        allPosts: action.payload,
        errorAllPosts: null,
      };
    }
    case ALL_POSTS_ERROR: {
      return {
        ...state,
        errorAllPosts: action.payload,
        allPosts: [],
        loadingAllPosts: false,
      };
    }

    // get one post
    case ONE_POST_LOADING: {
      return {
        ...state,
        postDetail: {},
        loadingPostDetail: true,
        errorPostDetail: null,
      };
    }
    case ONE_POST_SUCCESS: {
      return {
        ...state,
        postDetail: action.payload,
        loadingPostDetail: false,
        errorPostDetail: null,
      };
    }
    case ONE_POST_ERROR: {
      return {
        ...state,
        postDetail: {},
        loadingPostDetail: false,
        errorPostDetail: action.payload,
      };
    }

    //delete post
    case DELETE_POST_SUCCESS: {
      return {
        ...state,
        // TODO:
      };
    }
    case DELETE_POST_ERROR: {
      return {
        ...state,
        // TODO:
      };
    }

    // comment success, update 1 post
    case COMMENT_SUCCESS: {
      const { content, id, created_at, postId } = action.payload.data;
      const { id: userId, photoURL, username, fullname } = action.payload.currentUser;
      let postDetail;
      const isEditPost = state.postDetail.comments.find((item) => item.id === id);
      const comment = {
        id: id || Date.now(),
        content,
        created_at,
        userId,
        postId,
        photoURL,
        username,
        fullname,
      };
      if (!isEditPost) {
        postDetail = {
          ...state.postDetail,
          comments: [...state.postDetail.comments, comment],
        };
        postDetail.totalComments += 1;
      } else {
        postDetail = {
          ...state.postDetail,
          comment: state.postDetail.comments.map((oldComment) => {
            if (oldComment.id === comment.id) return comment;
            return oldComment;
          }),
        };
      }
      return {
        ...state,
        postDetail,
        errorPostDetail: null,
      };
    }
    case COMMENT_FAIL: {
      // TODO: handle error adding comment
      return {
        ...state,
        // postDetail: action.payload,
        // loadingPostDetail: false,
        // errorPostDetail: null,
      };
    }

    default:
      return state;
  }
};

export default postReducer;
