import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/comments_actions';
import { receiveAllPosts } from '../actions/posts_actions';
import { createComment, deleteComment } from '../util/comments_api_util';

export default ({ getState, dispatch }) => next => action => {
  const CommentSuccessCallback = posts => dispatch(receiveAllPosts(posts));
  switch(action.type) {
    case CREATE_COMMENT:
      console.log('create comment - middleware');
      createComment(action.comment, CommentSuccessCallback);
      return next(action);
    case DELETE_COMMENT:
      console.log('delete comment - middleware');
      deleteComment(action.id, CommentSuccessCallback);
      return next(action);
    default:
      return next(action);
  }
};
