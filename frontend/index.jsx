import React from 'react';
import configureStore from './store/store';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {login, signup, logout} from './util/session_api_util';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
      const preloadedState = {session: {currentUser: window.currentUser}};
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }
    Modal.setAppElement(document.body);
    ReactDOM.render(<Root store={store}/>, root);
    window.store = store;
});
