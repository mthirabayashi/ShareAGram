export const CREATE_FOLLOW = 'CREATE_FOLLOW';
export const DELETE_FOLLOW = 'DELETE_FOLLOW';

export const createFollow = (followed_id) => ({
  type: CREATE_FOLLOW,
  followed_id
});
export const deleteFollow = (followed_id) => ({
  type: DELETE_FOLLOW,
  followed_id
});
