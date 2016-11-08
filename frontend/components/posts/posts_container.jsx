import { connect } from 'react-redux';
import Posts from './posts';
import { fetchAllPosts, createPost } from '../../actions/posts_actions';
import { clearErrors } from '../../actions/session_actions';
import { createLike, deleteLike } from '../../actions/likes_actions';
import { createComment, deleteComment } from '../../actions/comments_actions';

const mapStateToProps = (state) => {
  // console.log(state);
  return ({
    currentUser: state.session.currentUser,
    posts: Object.keys(state.posts).map(id => state.posts[id]),
    errors: state.errors
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    createPost: (post) => dispatch(createPost(post)),
    clearErrors: () => dispatch(clearErrors()),
    createLike: (post_id) => dispatch(createLike(post_id)),
    deleteLike: (post_id) => dispatch(deleteLike(post_id)),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (id) => dispatch(deleteComment(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
