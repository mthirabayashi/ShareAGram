import { CREATE_FOLLOW, DELETE_FOLLOW } from '../actions/follows_actions';
import { createFollow, deleteFollow } from '../util/follows_api_util';
import { receiveCurrentUser } from '../actions/session_actions';
import { receiveProfile } from '../actions/users_actions';

export default ({ getState, dispatch }) => next => action => {

  const FollowSuccessCallback = data => {
    dispatch(receiveCurrentUser(data.currentUser));
    dispatch(receiveProfile(data.userProfile));
  };
  // debugger
  switch(action.type) {
    case CREATE_FOLLOW:
      createFollow(action.followed_id, FollowSuccessCallback);
      return next(action);
    case DELETE_FOLLOW:
      deleteFollow(action.followed_id, FollowSuccessCallback);
      return next(action);
    default:
      return next(action);
  }
};
