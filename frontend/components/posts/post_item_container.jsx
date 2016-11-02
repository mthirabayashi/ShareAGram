import { connect } from 'react-redux';
import PostItem from './post_item';
import {fetchAllPosts} from '../../actions/posts_actions';

const mapStateToProps = (state) => {
  console.log(state);
  return ({
  });
};

const mapDispatchToProps = (dispatch) => {

  return ({

  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostItem);
