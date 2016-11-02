import merge from 'lodash/merge';
import {RECEIVE_CURRENT_USER, RECEIVE_SIGN_IN_ERRORS, RECEIVE_SIGN_UP_ERRORS, CLEAR_ERRORS, LOGOUT} from '../actions/session_actions';

const _nullUser = {
  currentUser: null,
  errors: {
    logIn: [],
    signUp: [],
    createPost: []
  }
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.currentUser);
    case RECEIVE_SIGN_IN_ERRORS:
      newState = merge({}, state);
      newState.errors.logIn = action.errors.logIn;
      newState.errors.signUp = [];
      return newState;
    case RECEIVE_SIGN_UP_ERRORS:
      newState = merge({}, state);
      newState.errors.signUp = action.errors.signUp;
      newState.errors.logIn = [];
      return newState;
    case CLEAR_ERRORS:
      newState = merge({}, state);
      newState.errors.signUp = [];
      newState.errors.logIn = [];
      return newState;
    case LOGOUT:
      return _nullUser;
    default:
      return state;
  }
};

export default SessionReducer;
