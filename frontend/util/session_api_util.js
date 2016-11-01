export const signup = (user, success, error) => {
  $.ajax ({
    method: 'post',
    data: user,
    url: 'api/users',
    success,
    error
  });
};
export const login = (user, success, error) => {
  $.ajax ({
    method: 'post',
    data: user,
    url: 'api/session',
    success,
    error
  });
};
export const logout = (success, error) => {
  $.ajax ({
    method: 'delete',
    url: 'api/session',
    success,
    error
  });
};
