import { FETCH_PROFILE,
         RECEIVE_PROFILE_ERRORS,
         UPDATE_USER,
         receiveProfile,
         receiveProfileErrors
 } from '../actions/users_actions';

import { fetchProfile, updateUser } from '../util/users_api_util';


export default ({ getState, dispatch }) => next => action => {
  const ErrorCallback = xhr => dispatch(receiveProfileErrors(xhr.responseJSON));
  const fetchProfileSuccessCallback = profile => (
    dispatch(receiveProfile(profile))
  );
  // debugger
  switch(action.type) {
    case FETCH_PROFILE:
      fetchProfile(action.id, fetchProfileSuccessCallback, ErrorCallback);
      return next(action);
    case UPDATE_USER:
      updateUser(action.user, fetchProfileSuccessCallback);
      return next(action);
    default:
      return next(action);
  }
};
