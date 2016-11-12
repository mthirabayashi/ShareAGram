import { connect } from 'react-redux';
import Profile from './profile';
import { deletePost, updatePost } from '../../actions/posts_actions';
import { fetchProfile, updateUser } from '../../actions/users_actions';
import { createComment, deleteComment } from '../../actions/comments_actions';
import { createLike, deleteLike } from '../../actions/likes_actions';
import { createFollow, deleteFollow } from '../../actions/follows_actions';
import { clearSearch } from '../../actions/searches_actions';

const mapStateToProps = (state) => {
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
    deleteLike: (post_id) => dispatch(deleteLike(post_id)),
    createFollow: (id) => dispatch(createFollow(id)),
    deleteFollow: (id) => dispatch(deleteFollow(id)),
    clearSearch: () => dispatch(clearSearch()),
    updateUser: (user) => dispatch(updateUser(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
