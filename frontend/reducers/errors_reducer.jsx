import merge from 'lodash/merge';
import {RECEIVE_SIGN_IN_ERRORS, RECEIVE_SIGN_UP_ERRORS, CLEAR_ERRORS, LOGOUT} from '../actions/session_actions';

import {RECEIVE_POST_ERRORS} from '../actions/posts_actions';

const _nullUser = {
  logIn: [],
  signUp: [],
  createPost: []
};

const ErrorsReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_SIGN_IN_ERRORS:
      newState = merge({}, state);
      newState.logIn = action.errors.logIn;
      newState.signUp = [];
      newState.createPost = [];
      return newState;
    case RECEIVE_SIGN_UP_ERRORS:
      newState = merge({}, state);
      newState.signUp = action.errors.signUp;
      newState.logIn = [];
      newState.createPost = [];
      return newState;
    case RECEIVE_POST_ERRORS:
      newState = merge({}, state);
      newState.signUp = [];
      newState.logIn = [];
      newState.createPost = action.errors.createPost;
      return newState;
    case CLEAR_ERRORS:
      newState = merge({}, state);
      newState.signUp = [];
      newState.logIn = [];
      newState.createPost = [];
      return newState;
    default:
      return state;
  }
};

export default ErrorsReducer;
