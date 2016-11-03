export const fetchAllPosts = (success, error) => {
  $.ajax({
    method: 'get',
    url: 'api/posts',
    success,
    error
  });
};
export const fetchPost = (id, success, error) => {
  $.ajax({
    method: 'get',
    url: `api/posts/${id}`,
    data: id,
    success,
    error
  });
};
export const createPost = (post, success, error) => {
  $.ajax({
    method: 'post',
    url: 'api/posts',
    data: post,
    success,
    error
  });
};
export const updatePost = (post, success, error) => {
  $.ajax({
    method: 'patch',
    url: `api/posts/${post.id}`,
    data: post,
    success,
    error
  });
};
export const deletePost = (id, success, error) => {
  $.ajax({
    method: 'patch',
    url: `api/posts/${id}`,
    data: id,
    success,
    error
  });
};
export const fetchProfile = (id, success, error) => {
  console.log('fetching user profile from utils');
  $.ajax({
    method: 'get',
    url: `api/users/${id}`,
    data: id,
    success,
    error
  });
};
