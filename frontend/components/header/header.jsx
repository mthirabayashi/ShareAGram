import React from 'react';
import { withRouter } from 'react-router';

class Header extends React.Component {
  constructor (props) {
    super(props);
    // console.log(props);
    this._ensureSignedIn = this._ensureSignedIn.bind(this);
    this.goToProfile = this.goToProfile.bind(this);
    this.goToHome = this.goToHome.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.showSearchResults = this.showSearchResults.bind(this);
    this.goToSearchProfile = this.goToSearchProfile.bind(this);
    this.state = {
      search: '',
    };
  }

  componentDidUpdate() {
    this._ensureSignedIn();
  }

  // componentWillReceiveProps(nextProps) {
  //   debugger
  //   this.props.createSearch(nextProps.searchResults);
  // }

  _ensureSignedIn () {
    if (!this.props.currentUser) {
      this.props.router.push('/login');
    }
  }

  goToProfile(e) {
    e.preventDefault();
    this.props.router.push(`/user/${this.props.currentUser.id}`);
  }

  goToSearchProfile(id) {
    return (e) => {
      this.props.router.push(`/user/${id}`);
      // this.state.search = '';
      // this.setState({search: ''});
    };
  }

  goToHome(e) {
    e.preventDefault();
    this.props.router.push(`/`);
  }

  updateSearch(e) {
    // console.log('updating state');
    if (this.state.search === '') {
      this.props.createSearch(this.state.search);
    }
    this.setState({
      search: e.target.value
    }, () => this.props.createSearch(this.state.search));
    // this.state.search = e.target.value;
    // console.log(this.state.search);
    // this.props.createSearch(this.state.search);
  }

  showSearchResults() {
    if (this.props.searchResults.length > 0) {
      return (
        <ul className='search-bar-results'>
          {this.props.searchResults.map( user => (
            <li key={'search_results' + user.id} className='search-result' onClick={this.goToSearchProfile(user.id)}>
              <img src={user.profile_pic} className='search-profile-pic'/>
              <h5 className='search-profile-username'>{user.username}</h5>
            </li>
          ))}
        </ul>
      );
    }
  }
  // <img src='http://res.cloudinary.com/duep1w4tv/image/upload/c_lfill,w_150/v1478742555/ShareAGram/olapgmnidrgdudide8g4.jpg' alt='LOGO' onClick={this.goToHome}/>
  // <img src='http://res.cloudinary.com/duep1w4tv/image/upload/v1478393435/profile-icon_kc9txj.png' alt='Profile' onClick={this.goToProfile}/>
  // <button onClick={this.props.logout}>Logout</button>
  render() {
    return(
      <div className='header' onClick={this.props.clearSearch}>
        <section className='logo-title'>
          <section className='logo'>

              <i className="fa fa-instagram fa-2x" aria-hidden="true" onClick={this.goToHome}></i>
          </section>
          <section className='header-app-title' onClick={this.goToHome}>
            ShareAGram
          </section>
        </section>
        <section className='search-bar'>
          <section>
            <section className='search-icon-container'>
              <i className="fa fa-search my-search" aria-hidden="true" ></i>
              <input type='text' value={this.state.search} placeholder='Search' onChange={this.updateSearch}></input>
            </section>
          </section>
          {this.showSearchResults()}
        </section>
        <nav className='navbar'>
          <ul className='navbar-list'>
        		<li className='navbar-item'>
              <i className="fa fa-user fa-2x" aria-hidden="true" onClick={this.goToProfile}><div className='header-hover-profile'>Profile</div></i>
        		</li>
        		<li className='navbar-item'>
              <i className="fa fa-sign-out fa-2x" aria-hidden="true" onClick={this.props.logout}><div className='header-hover-logout'>Log Out</div></i>
        		</li>
          </ul>
        </nav>
      </div>
    );
  }

}


export default withRouter(Header);
