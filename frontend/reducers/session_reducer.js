import merge from 'lodash/merge';
import {RECEIVE_CURRENT_USER, RECEIVE_SIGN_IN_ERRORS, RECEIVE_SIGN_UP_ERRORS, CLEAR_ERRORS, LOGOUT} from '../actions/session_actions';

const _nullUser = {
  currentUser: null,
  errors: {
    session: [],
    user: []
  }
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  // debugger
  let newState;
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.currentUser);
    case RECEIVE_SIGN_IN_ERRORS:
      newState = merge({}, state);
      newState.errors.session = action.errors.session;
      newState.errors.user = [];
      return newState;
    case RECEIVE_SIGN_UP_ERRORS:
      newState = merge({}, state);
      newState.errors.user = action.errors.user;
      newState.errors.session = [];
      return newState;
    case CLEAR_ERRORS:
      newState = merge({}, state);
      newState.errors.user = [];
      newState.errors.session = [];
      return newState;
    case LOGOUT:
      return _nullUser;
    default:
      return state;
  }
};

export default SessionReducer;
