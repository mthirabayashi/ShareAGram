import { connect } from 'react-redux';
import LoginForm from './login_form';
import {login, signup} from '../../actions/session_actions';

const mapStateToProps = (state) => {
  let currentUser = state.session.currentUser;
  currentUser = Boolean(currentUser);
  return ({
    loggedIn: currentUser,
    errors: state.session.errors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    processForm: (user) => dispatch(login(user)),
    formType: 'Log In'
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
