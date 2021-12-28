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
import {
  COMMENT_SUCCESS,
  COMMENT_FAIL,
  DELETE_COMMENT_FAIL,
  DELETE_COMMENT_SUCCESS,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAIL,
  FOLLOW_SUCCESS,
  FOLLOW_FAIL,
} from '../interactions/constants';
import deepClone from '../../util/deepClone';
import { isFromUnlikeToLike } from './helper';

// declare init state, it should have default value type as expected data type
const INITIAL_STATE = {
  allPosts: [],
  loadingAllPosts: false,
  errorAllPosts: null,

  postDetail: null,
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
        postDetail: null,
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
        postDetail: null,
        loadingPostDetail: false,
        errorPostDetail: action.payload,
      };
    }

    //delete post
    case DELETE_POST_SUCCESS: {
      const postId = action.payload;
      let postDetail = state.postDetail;
      if (postDetail?.id?.toString() === postId.toString()) {
        postDetail = null;
      }
      const allPosts = state.allPosts.filter((item) => item?.id?.toString() !== postId.toString());
      return {
        ...state,
        postDetail,
        allPosts,
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
          comments: state.postDetail.comments.map((oldComment) => {
            if (oldComment.id === comment.id) return { ...oldComment, content: comment.content };
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

    // delete a comment success, update 1 post
    case DELETE_COMMENT_SUCCESS: {
      const commentId = action.payload;
      const postDetail = deepClone(state.postDetail);
      postDetail.comments = postDetail.comments.filter((item) => item.id !== commentId);
      postDetail.totalComments -= 1;
      return {
        ...state,
        postDetail,
      };
    }
    case DELETE_COMMENT_FAIL: {
      // TODO: handle error delete comment
      return {
        ...state,
        // postDetail: action.payload,
        // loadingPostDetail: false,
        // errorPostDetail: null,
      };
    }

    // like/unlike post, update isLiked in postList and postDetail
    case LIKE_POST_SUCCESS: {
      const { postId } = action.payload;
      let allPosts = deepClone(state.allPosts);
      const postDetail = deepClone(state.postDetail);

      if (postDetail?.id?.toString() === postId.toString()) {
        const fromUnlikeToLike = isFromUnlikeToLike(postDetail.isLiked);
        // toggle like
        postDetail.isLiked = !postDetail.isLiked;
        // add/remove count
        const offset = fromUnlikeToLike ? 1 : -1;
        postDetail.totalLikes += offset;
      }

      allPosts = allPosts.map((oldPost) => {
        if (oldPost.id === postId) {
          const fromUnlikeToLike = isFromUnlikeToLike(oldPost.isLiked);
          const offset = fromUnlikeToLike ? 1 : -1;
          return { ...oldPost, isLiked: !oldPost.isLiked, totalLikes: oldPost.totalLikes + offset };
        }
        return oldPost;
      });

      return {
        ...state,
        postDetail,
        allPosts,
      };
    }
    case LIKE_POST_FAIL: {
      // TODO: handle error like post
      return {
        ...state,
        // postDetail: action.payload,
        // loadingPostDetail: false,
        // errorPostDetail: null,
      };
    }

    // follow/unFollow on post,
    case FOLLOW_SUCCESS: {
      const { postId } = action.payload;
      let allPosts = deepClone(state.allPosts);
      const postDetail = deepClone(state.postDetail);

      if (postDetail?.id?.toString() === postId.toString()) {
        postDetail.isFollowed = !postDetail.isFollowed;
      }

      allPosts = allPosts.map((oldPost) => {
        if (oldPost.id === postId) {
          return { ...oldPost, isFollowed: !oldPost.isFollowed };
        }
        return oldPost;
      });

      return {
        ...state,
        postDetail,
        allPosts,
      };
    }
    case FOLLOW_FAIL: {
      // TODO: handle error follow post
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
