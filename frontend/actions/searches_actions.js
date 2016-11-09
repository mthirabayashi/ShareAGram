export const CREATE_SEARCH = 'CREATE_SEARCH';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const createSearch = (search) => ({
  type: CREATE_SEARCH,
  search
});

export const receiveSearchResults = (results) => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH
});
