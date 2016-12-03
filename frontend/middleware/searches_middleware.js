import { CREATE_SEARCH, receiveSearchResults } from '../actions/searches_actions';
import { createSearch } from '../util/searches_api_util';

export default ({ getState, dispatch }) => next => action => {
  // const CommentSuccessCallback = posts => dispatch(receiveAllPosts(posts));
  const SearchSuccessCallback = results => dispatch(receiveSearchResults(results));
  switch(action.type) {
    case CREATE_SEARCH:
      createSearch(action.search, SearchSuccessCallback);
      return next(action);
    default:
      return next(action);
  }
};
