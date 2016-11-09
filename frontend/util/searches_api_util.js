export const createSearch = (search, success) => {
  $.ajax({
    method: 'post',
    url: 'api/searches',
    data: {search: search},
    success
  });
};
