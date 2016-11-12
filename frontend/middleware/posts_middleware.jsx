import { hashHistory } from 'react-router';
import { FETCH_ALL_POSTS,
         FETCH_POST,
         FETCH_MORE_POSTS,
         CREATE_POST,
         UPDATE_POST,
         DELETE_POST,
         RECEIVE_POST_ERRORS,
         receivePostErrors,
         receivePost,
         receiveAllPosts,
         receiveMorePosts
       } from '../actions/posts_actions';

import { fetchAllPosts, fetchPost, fetchMorePosts, createPost, updatePost, deletePost } from '../util/posts_api_util';

import { FETCH_PROFILE, fetchProfile } from '../actions/users_actions';

import { CREATE_LIKE, DELETE_LIKE } from '../actions/likes_actions';
import { createLike, deleteLike } from '../util/likes_api_util';

import { receiveCurrentUser } from '../actions/session_actions';

export default ({ getState, dispatch }) => next => action => {
  const fetchAllPostsSuccessCallback = posts =>  dispatch(receiveAllPosts(posts));
  const fetchMorePostsSuccessCallback = posts =>  dispatch(receiveMorePosts(posts));
  const createPostSuccessCallback = (post) => {
    dispatch(receivePost(post));
    // hashHistory.push('/');
  };
  const ErrorCallback = xhr => dispatch(receivePostErrors(xhr.responseJSON));
  const deletePostSuccessCallback = (id) =>
  dispatch(fetchProfile(id));
  const updatePostSuccessCallback = (id) => dispatch(fetchProfile(id));
  const toggleLikeSuccessCallback = (data) => {
    dispatch(receiveCurrentUser(data.currentUser));
    dispatch(receivePost(data.post));
  };
  // debugger
  switch(action.type) {
    case FETCH_ALL_POSTS:
      fetchAllPosts(fetchAllPostsSuccessCallback, ErrorCallback);
      return next(action);
    case FETCH_MORE_POSTS:
      fetchMorePosts(action.offset, fetchMorePostsSuccessCallback);
      return next(action);
    case CREATE_POST:
      createPost(action.post, createPostSuccessCallback, ErrorCallback);
      return next(action);
    case UPDATE_POST:
      updatePost(action.post, updatePostSuccessCallback, ErrorCallback);
      return next(action);
    case DELETE_POST:
      deletePost(action.id, deletePostSuccessCallback, ErrorCallback);
      return next(action);
    case CREATE_LIKE:
      createLike(action.post_id, toggleLikeSuccessCallback, ErrorCallback);
      return next(action);
    case DELETE_LIKE:
      deleteLike(action.post_id, toggleLikeSuccessCallback, ErrorCallback);
      return next(action);
    default:
      return next(action);
  }
};
