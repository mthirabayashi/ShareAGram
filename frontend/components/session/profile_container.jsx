import { connect } from 'react-redux';
import Profile from './profile';
import {fetchProfile} from '../../actions/session_actions';

const mapStateToProps = (state) => {
  console.log(state);
  return ({
    currentUser: state.session.currentUser,
    posts: Object.keys(state.posts).map(id => state.posts[id])
  });
};

const mapDispatchToProps = (dispatch) => {

  return ({
    fetchProfile: (id) => dispatch(fetchProfile(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
