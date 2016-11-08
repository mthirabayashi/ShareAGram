import { connect } from 'react-redux';
import Profile from './profile';
import { deletePost, updatePost } from '../../actions/posts_actions';
import { fetchProfile } from '../../actions/session_actions';
import { createComment, deleteComment } from '../../actions/comments_actions';
import { createLike, deleteLike } from '../../actions/likes_actions';

const mapStateToProps = (state) => {
  console.log(state);
  return ({
    currentUser: state.session.currentUser,
    user: state.userProfile,
    posts: Object.keys(state.posts).map(id => state.posts[id]),
    errors: state.errors
  });
};

const mapDispatchToProps = (dispatch) => {

  return ({
    deletePost: (id) => (dispatch(deletePost(id))),
    updatePost: (post) => (dispatch(updatePost(post))),
    deleteComment: (id) => (dispatch(deleteComment(id))),
    createComment: (comment) => (dispatch(createComment(comment))),
    createLike: (post_id) => dispatch(createLike(post_id)),
    deleteLike: (post_id) => dispatch(deleteLike(post_id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
