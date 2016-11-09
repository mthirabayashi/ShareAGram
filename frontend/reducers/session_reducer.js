import merge from 'lodash/merge';
import {RECEIVE_CURRENT_USER, RECEIVE_SIGN_IN_ERRORS, RECEIVE_SIGN_UP_ERRORS, CLEAR_ERRORS, LOGOUT} from '../actions/session_actions';

const _nullUser = {
  currentUser: null
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState;
  // debugger
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      newState = (merge({}, state, action.currentUser));
      newState.currentUser.likedPosts = action.currentUser.currentUser.likedPosts;
      newState.currentUser.following = action.currentUser.currentUser.following;
      return newState;
    case LOGOUT:
      return _nullUser;
    default:
      return state;
  }
};

export default SessionReducer;


// case RECEIVE_SIGN_IN_ERRORS:
//   newState = merge({}, state);
//   newState.errors.logIn = action.errors.logIn;
//   newState.errors.signUp = [];
//   newState.errors.createPost = [];
//   return newState;
// case RECEIVE_SIGN_UP_ERRORS:
//   newState = merge({}, state);
//   newState.errors.signUp = action.errors.signUp;
//   newState.errors.logIn = [];
//   newState.errors.createPost = [];
//   return newState;
// case CLEAR_ERRORS:
//   newState = merge({}, state);
//   newState.errors.signUp = [];
//   newState.errors.logIn = [];
//   newState.errors.createPost = [];
//   return newState;
