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
export const updateUser = (user, success) => {
  console.log('updating user from utils');
  $.ajax({
    method: 'patch',
    url: `api/users/${user.id}`,
    data: {user: user},
    success
  });
};
