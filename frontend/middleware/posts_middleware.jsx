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

export default ({ getState, dispatch }) => next => action => {
  const fetchAllPostsSuccessCallback = posts => dispatch(receiveAllPosts(posts));
  const ErrorCallback = xhr => dispatch(receivePostErrors(xhr.responseJSON));
  switch(action.type) {
    case FETCH_ALL_POSTS:
      fetchAllPosts(fetchAllPostsSuccessCallback, ErrorCallback);
      return next(action);
    case CREATE_POST:
      createPost(action.post, fetchAllPostsSuccessCallback, ErrorCallback);
      return next(action);
    default:
      return next(action);
  }
};
