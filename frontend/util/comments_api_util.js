export const createComment = (comment, success, error) => {
  $.ajax({
    method: 'post',
    url: 'api/comments',
    data: {comment: comment},
    success,
    error
  });
};
