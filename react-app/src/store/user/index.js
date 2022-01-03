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

  allUsersThatIAmNotFollowing: [],
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
        allUsersThatIAmNotFollowing: action.payload,
        loadingAllUsers: false,
        errorAllUsers: null,
      };
    case GET_ALL_USER_THAT_I_DONT_FOLLOW_LOADING:
      return {
        ...state,
        allUsersThatIAmNotFollowing: [],
        loadingAllUsers: true,
        errorAllUsers: null,
      };
    case GET_ALL_USER_THAT_I_DONT_FOLLOW_ERROR:
      return {
        ...state,
        allUsersThatIAmNotFollowing: [],
        loadingAllUsers: false,
        errorAllUsers: action.payload,
      };

    // follow/unFollow on profile page,
    case FOLLOW_SUCCESS: {
      const { userId } = action.payload;
      const userProfile = deepClone(state.userProfile);
      let allUsersThatIAmNotFollowing = deepClone(state.allUsersThatIAmNotFollowing);
      let allUsers = deepClone(state.allUsers);

      if (userProfile?.id?.toString() === userId.toString()) {
        if (userProfile.isFollowed) {
          userProfile.totalFollowers -= 1;
        } else {
          userProfile.totalFollowers += 1;
        }
        userProfile.isFollowed = !userProfile.isFollowed;
      }

      allUsersThatIAmNotFollowing = allUsersThatIAmNotFollowing.map((item) => {
        if (item?.id?.toString() === userId.toString()) {
          return {
            ...item,
            isFollowed: !Boolean(item?.isFollowed),
          };
        }
        return item;
      });
      allUsers = allUsers.map((item) => {
        if (item?.id?.toString() === userId.toString()) {
          return {
            ...item,
            isFollowed: !Boolean(item?.isFollowed),
          };
        }
        return item;
      });

      return {
        ...state,
        userProfile,
        allUsersThatIAmNotFollowing,
        allUsers,
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
