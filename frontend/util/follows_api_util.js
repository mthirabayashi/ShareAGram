
export const createFollow = (followed_id, success, error) => {
  $.ajax({
    method: 'post',
    url: 'api/follows',
    data: {followed_id: followed_id},
    success,
    error
  });
};
export const deleteFollow = (followed_id, success, error) => {
  $.ajax({
    method: 'delete',
    url: `api/follows/${followed_id}`,
    data: {followed_id: followed_id},
    success,
    error
  });
};
