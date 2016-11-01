import { receiveCurrentUser,
         receiveSignInErrors,
         receiveSignUpErrors,
         RECEIVE_SIGN_IN_ERRORS,
         RECEIVE_SIGN_UP_ERRORS,
         clearErrors,
         LOGIN,
         LOGOUT,
         SIGNUP
       } from '../actions/session_actions';

import { login, signup, logout } from '../util/session_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const SignInErrorCallback = xhr => dispatch(receiveSignInErrors(xhr.responseJSON));
  const SignUpErrorCallback = xhr => dispatch(receiveSignUpErrors(xhr.responseJSON));
  // debugger
  switch(action.type) {
    case LOGIN:
      login(action.user, successCallback, SignInErrorCallback);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      break;
    case SIGNUP:
      signup(action.user, successCallback, SignUpErrorCallback);
      return next(action);
    case RECEIVE_SIGN_UP_ERRORS:
      dispatch(clearErrors());
      return next(action);
    case RECEIVE_SIGN_IN_ERRORS:
      dispatch(clearErrors());
      return next(action);
    default:
      return next(action);
  }
};
