export const createComment = (comment, success) => {
  $.ajax({
    method: 'post',
    url: 'api/comments',
    data: {comment: comment},
    success
  });
};
export const deleteComment = (id, success) => {
  $.ajax({
    method: 'delete',
    url: `api/comments/${id}`,
    data: id,
    success
  });
};
