import { connect } from 'react-redux';
import Posts from './posts';
import {fetchAllPosts, createPost} from '../../actions/posts_actions';

const mapStateToProps = (state) => {
  // console.log(state);
  return ({
    currentUser: state.session.currentUser,
    posts: Object.keys(state.posts).map(id => state.posts[id])
  });
};

const mapDispatchToProps = (dispatch) => {

  return ({
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    createPost: (post) => dispatch(createPost(post))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
