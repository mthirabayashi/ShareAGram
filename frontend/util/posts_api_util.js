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
  console.log('updating post');
  $.ajax({
    method: 'patch',
    url: `api/posts/${post.id}`,
    data: {post: post},
    success,
    error
  });
};
export const deletePost = (id, success, error) => {
  $.ajax({
    method: 'delete',
    url: `api/posts/${id}`,
    data: id,
    success,
    error
  });
};
