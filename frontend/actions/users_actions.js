export const FETCH_PROFILE = 'FETCH_PROFILE';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const RECEIVE_PROFILE_ERRORS = 'RECEIVE_PROFILE_ERRORS';
export const UPDATE_USER = 'UPDATE_USER';

export const fetchProfile = (id) => ({
  type: FETCH_PROFILE,
  id
});
export const receiveProfile = (profile) => ({
  type: RECEIVE_PROFILE,
  profile
});
export const receiveProfileErrors = (errors) => ({
  type: RECEIVE_PROFILE,
  errors
});
export const updateUser = (user) => ({
  type: UPDATE_USER,
  user
});
