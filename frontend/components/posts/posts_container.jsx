import { connect } from 'react-redux';
import Posts from './posts';
import {fetchAllPosts} from '../../actions/posts_actions';

const mapStateToProps = (state) => {
  console.log(state);
  return ({
    posts: Object.keys(state.posts).map(id => state.posts[id])
  });
};

const mapDispatchToProps = (dispatch) => {

  return ({
    fetchAllPosts: () => dispatch(fetchAllPosts())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
