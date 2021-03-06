import { connect } from 'react-redux';
import Header from './header';
import {logout} from '../../actions/session_actions';
import {createSearch, clearSearch} from '../../actions/searches_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    searchResults: state.searchResults
  });
};

const mapDispatchToProps = (dispatch) => {

  return ({
    logout: () => dispatch(logout()),
    createSearch: (search) => dispatch(createSearch(search)),
    clearSearch: () => dispatch(clearSearch())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
