import React from 'react';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/sign_up_form_container';
import {clearErrors} from '../actions/session_actions';
import {clearSearch} from '../actions/searches_actions';
import {fetchProfile} from '../actions/users_actions';
import Posts from './posts/posts_container';
import Profile from './users/profile_container';


const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    // debugger
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
    _clearErrors();
  };

  const _ensureSignedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser){
      replace('/login');
    }
    _clearErrors();
    _clearSearch();
  };

  const _clearErrors = () => {
    console.log('clearing errors');
    store.dispatch(clearErrors());
  };
  const _clearSearch = () => {
    console.log('clearing search');
    store.dispatch(clearSearch());
  };

  const _fetchProfile = (nextState) => {
    store.dispatch(fetchProfile(nextState.params.userId));
    _clearSearch();
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={_ensureSignedIn}>
          <IndexRoute component={Posts} onEnter={_ensureSignedIn}/>
          <Route path='posts' onEnter={_ensureSignedIn} component={Posts}>
            <Route path=':postId' />
          </Route>
          <Route path='user/:userId' component={Profile} onEnter={_fetchProfile} />
        </Route>
        <Route path="/login" component={LoginFormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path="/signup" component={SignUpFormContainer} onEnter={_redirectIfLoggedIn} />
      </Router>
    </Provider>
  );
};

export default Root;
