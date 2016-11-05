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
