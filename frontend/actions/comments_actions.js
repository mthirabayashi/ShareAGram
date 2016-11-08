export const CREATE_COMMENT = 'CREATE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

export const createComment = (comment) => ({
  type: CREATE_COMMENT,
  comment
});

export const receiveCommentErrors = (errors) => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});
