export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';

export const fetchAllPosts = () => ({
  type: FETCH_ALL_POSTS
});
export const fetchPost = (id) => ({
  type: FETCH_POST,
  id
});
export const createPost = (post) => ({
  type: CREATE_POST,
  post
});
export const updatePost = (post) => ({
  type: UPDATE_POST,
  post
});
export const deletePost = (id) => ({
  type: DELETE_POST,
  id
});
export const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts
});
export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});
export const receivePostErrors = (errors) => ({
  type: RECEIVE_POST_ERRORS,
  errors
});
