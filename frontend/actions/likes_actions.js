export const CREATE_LIKE = 'CREATE_LIKE';
export const DELETE_LIKE = 'DELETE_LIKE';

export const createLike = (post_id) => ({
  type: CREATE_LIKE,
  post_id
});
export const deleteLike = (post_id) => ({
  type: DELETE_LIKE,
  post_id
});
