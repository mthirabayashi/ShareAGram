import merge from 'lodash/merge';
import { RECEIVE_PROFILE } from '../actions/users_actions';

const _nullProfile = {
  id: 0,
  username: "",
  full_name: "",
  profile_pic: "",
  following: [],
  followers: 0
};

const UsersReducer = (state = _nullProfile, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_PROFILE:
      newState = merge({}, action.profile.userProfile);
      return newState;
    default:
      return state;
  }
};

export default UsersReducer;
