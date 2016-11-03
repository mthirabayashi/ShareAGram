import merge from 'lodash/merge';
import {RECEIVE_ALL_POSTS} from '../actions/posts_actions';

const _nullPost = {
  0: {
    id: 0,
    description: '',
    img_url: '',
    author_id: 0
  }
};

const SessionReducer = (state = _nullPost, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_ALL_POSTS:
      newState = merge({}, action.posts);
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
