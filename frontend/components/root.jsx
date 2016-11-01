import React from 'react';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/sign_up_form_container';
import {clearErrors} from '../actions/session_actions';


const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    // debugger
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
    _clearErrors();
  };

  // const _redirectIfNotLoggedIn = (nextState, replace) => {
  //   const currentUser = store.getState().session.currentUser;
  //   if (Boolean(currentUser)===false) {
  //     replace('/login');
  //   }
  // };

  const _ensureSignedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser){
      replace('/login');
    }
  };

  const _clearErrors = () => (
    store.dispatch(clearErrors())
  );

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          
        </Route>
        <Route path="/login" component={LoginFormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path="/signup" component={SignUpFormContainer} onEnter={_redirectIfLoggedIn} />
      </Router>
    </Provider>
  );
};

export default Root;
