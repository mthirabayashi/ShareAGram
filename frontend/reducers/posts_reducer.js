import merge from 'lodash/merge';
import {RECEIVE_ALL_POSTS, RECEIVE_POST, RECEIVE_MORE_POSTS, CLEAR_POSTS} from '../actions/posts_actions';
import {RECEIVE_PROFILE} from '../actions/users_actions';

const _nullPost = {
  0: {
    id: 0,
    description: '',
    img_url: '',
    author: {
      author_id: -1,
      author_pic: '',
      author_username: ''
    },
    likes: 0,
    comments: {}
  }
};

const PostsReducer = (state = _nullPost, action) => {
  Object.freeze(state);
  let newState;
  // debugger
  switch(action.type){
    case RECEIVE_ALL_POSTS:
      newState = merge({}, action.posts);
      return newState;
    case RECEIVE_POST:
      newState = merge({}, state, action.post);
      newState[Object.keys(action.post)].comments = action.post[Object.keys(action.post)].comments;
      return newState;
    case RECEIVE_MORE_POSTS:
      newState = merge({}, state, action.posts);
      return newState;
    case RECEIVE_PROFILE:
      newState = merge({}, action.profile.posts);
      return newState;
    case CLEAR_POSTS:
      // console.log(`returning default state:`);
      // console.log(_nullPost);
      return _nullPost;
    default:
      return state;
  }
};

export default PostsReducer;
