
export const createLike = (post_id, success, error) => {
  $.ajax({
    method: 'post',
    url: 'api/likes',
    data: {post_id: post_id},
    success,
    error
  });
};
export const deleteLike = (post_id, success, error) => {
  $.ajax({
    method: 'delete',
    url: `api/likes/${post_id}`,
    data: {post_id: post_id},
    success,
    error
  });
};
