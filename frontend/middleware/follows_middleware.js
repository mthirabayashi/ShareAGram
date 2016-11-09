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
      console.log('create follow - middleware');
      createFollow(action.followed_id, FollowSuccessCallback);
      return next(action);
    case DELETE_FOLLOW:
      console.log('delete follow - middleware');
      deleteFollow(action.followed_id, FollowSuccessCallback);
      return next(action);
    default:
      return next(action);
  }
};
