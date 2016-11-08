export const createComment = (comment, success, error) => {
  $.ajax({
    method: 'post',
    url: 'api/comments',
    data: {comment: comment},
    success,
    error
  });
};
export const deleteComment = (id, success, error) => {
  $.ajax({
    method: 'delete',
    url: `api/comments/${id}`,
    data: id,
    success,
    error
  });
};
