import { connect } from 'react-redux';
import Profile from './profile';
import { deletePost } from '../../actions/posts_actions';
import { fetchProfile } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  // console.log(state);
  return ({
    currentUser: state.session.currentUser,
    user: state.userProfile,
    posts: Object.keys(state.posts).map(id => state.posts[id])
  });
};

const mapDispatchToProps = (dispatch) => {

  return ({
    deletePost: (id) => (dispatch(deletePost(id)))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
