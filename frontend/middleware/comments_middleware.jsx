import { CREATE_COMMENT } from '../actions/comments_actions';
import { receiveAllPosts } from '../actions/posts_actions';
import { createComment, receiveCommentErrors } from '../util/comments_api_util';

export default ({ getState, dispatch }) => next => action => {
  const CommentSuccessCallback = posts => dispatch(receiveAllPosts(posts));
  const ErrorCallback = xhr => dispatch(receiveCommentErrors);
  switch(action.type) {
    case CREATE_COMMENT:
      console.log('create comment - middleware');
      createComment(action.comment, CommentSuccessCallback, ErrorCallback);
      return next(action);
    default:
      return next(action);
  }
};
