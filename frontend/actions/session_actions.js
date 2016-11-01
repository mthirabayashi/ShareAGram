export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SIGN_IN_ERRORS = "RECEIVE_SIGN_IN_ERRORS";
export const RECEIVE_SIGN_UP_ERRORS = "RECEIVE_SIGN_UP_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const login = (user) => ({
  type: LOGIN,
  user
});
export const logout = () => ({
  type: LOGOUT
});
export const signup = (user) => ({
  type: SIGNUP,
  user
});
export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});
export const receiveSignInErrors = (errors) => ({
  type: RECEIVE_SIGN_IN_ERRORS,
  errors
});
export const receiveSignUpErrors = (errors) => ({
  type: RECEIVE_SIGN_UP_ERRORS,
  errors
});
export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
