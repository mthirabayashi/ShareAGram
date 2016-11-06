import { FETCH_ALL_POSTS,
         FETCH_POST,
         CREATE_POST,
         UPDATE_POST,
         DELETE_POST,
         RECEIVE_POST_ERRORS,
         receivePostErrors,
         receivePost,
         receiveAllPosts
       } from '../actions/posts_actions';

import { fetchAllPosts, fetchPost, createPost, updatePost, deletePost } from '../util/posts_api_util';

import { FETCH_PROFILE, fetchProfile } from '../actions/users_actions';

export default ({ getState, dispatch }) => next => action => {
  const fetchAllPostsSuccessCallback = posts =>  dispatch(receiveAllPosts(posts));
  const createPostSuccessCallback = () => {

  };
  const ErrorCallback = xhr => dispatch(receivePostErrors(xhr.responseJSON));
  const deletePostSuccessCallback = (id) =>
  dispatch(fetchProfile(id));
  const updatePostSuccessCallback = (id) => dispatch(fetchProfile(id));
  // debugger
  switch(action.type) {
    case FETCH_ALL_POSTS:
      fetchAllPosts(fetchAllPostsSuccessCallback, ErrorCallback);
      return next(action);
    case CREATE_POST:
      createPost(action.post, fetchAllPostsSuccessCallback, ErrorCallback);
      return next(action);
    case UPDATE_POST:
      console.log('posts middleware - updating post');
      updatePost(action.post, updatePostSuccessCallback, ErrorCallback);
      return next(action);
    case DELETE_POST:
      deletePost(action.id, deletePostSuccessCallback, ErrorCallback);
      return next(action);
    default:
      return next(action);
  }
};
