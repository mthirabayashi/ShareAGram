import { connect } from 'react-redux';
import Profile from './profile';
import {fetchProfile} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(ownProps);
  console.log(ownProps.routeParams);
  return ({
    user: state.session.currentUser,
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
