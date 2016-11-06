import { connect } from 'react-redux';
import SignUpForm from './sign_up_form';
import {login, signup} from '../../actions/session_actions';

const mapStateToProps = (state) => {
  let currentUser = state.session.currentUser;
  currentUser = Boolean(currentUser);
  return ({
    loggedIn: currentUser,
    errors: state.errors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    processForm: (user) => dispatch(signup(user)),
    guestLogin: () => dispatch(login({user: {username: 'guest', password: 'password'}})),
    formType: 'Sign Up'
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
