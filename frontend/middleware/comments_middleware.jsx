import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/comments_actions';
import { receiveAllPosts, receivePost } from '../actions/posts_actions';
import { createComment, deleteComment } from '../util/comments_api_util';

export default ({ getState, dispatch }) => next => action => {
  // const CommentSuccessCallback = posts => dispatch(receiveAllPosts(posts));
  const CommentSuccessCallback = post => dispatch(receivePost(post));
  switch(action.type) {
    case CREATE_COMMENT:
      createComment(action.comment, CommentSuccessCallback);
      return next(action);
    case DELETE_COMMENT:
      deleteComment(action.id, CommentSuccessCallback);
      return next(action);
    default:
      return next(action);
  }
};
