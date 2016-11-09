import merge from 'lodash/merge';
import { RECEIVE_SEARCH_RESULTS, CLEAR_SEARCH } from '../actions/searches_actions';

const _searchResults = [];

const UsersReducer = (state = _searchResults, action) => {
  Object.freeze(state);
  let newState;
  // debugger
  switch(action.type){
    case RECEIVE_SEARCH_RESULTS:
      return action.results.searchResults;
    case CLEAR_SEARCH:
      return _searchResults;
    default:
      return state;
  }
};

export default UsersReducer;
