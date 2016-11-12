export const fetchProfile = (id, success, error) => {
  $.ajax({
    method: 'get',
    url: `api/users/${id}`,
    data: id,
    success,
    error
  });
};
export const updateUser = (user, success) => {
  $.ajax({
    method: 'patch',
    url: `api/users/${user.id}`,
    data: {user: user},
    success
  });
};
