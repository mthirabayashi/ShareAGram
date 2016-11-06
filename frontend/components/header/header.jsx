import React from 'react';
import { withRouter } from 'react-router';

class Header extends React.Component {
  constructor (props) {
    super(props);
    // console.log(props);
    this._ensureSignedIn = this._ensureSignedIn.bind(this);
    this.goToProfile = this.goToProfile.bind(this);
    this.goToHome = this.goToHome.bind(this);
  }

  componentDidUpdate() {
    this._ensureSignedIn();
  }

  _ensureSignedIn () {
    if (!this.props.currentUser) {
      this.props.router.push('/login');
    }
  }

  goToProfile(e) {
    e.preventDefault();
    this.props.router.push(`/user/${this.props.currentUser.id}`);
  }

  goToHome(e) {
    e.preventDefault();
    this.props.router.push(`/`);
  }

  render() {
    return(
      <div className='header'>
        <section className='logo-title'>
          <section className='logo'>
            <img src='http://res.cloudinary.com/duep1w4tv/image/upload/v1478393435/Instagram_App_Logo_wumc6c.png' alt='LOGO' onClick={this.goToHome}/>
          </section>
          <section className='header-app-title' onClick={this.goToHome}>
            ShareAGram
          </section>
        </section>
        <section className='search-bar'>
          <input type='text' placeholder='Search'></input>
        </section>
        <nav className='navbar'>
          <ul className='navbar-list'>
        		<li className='navbar-item'>
              <img src='http://res.cloudinary.com/duep1w4tv/image/upload/v1478393435/profile-icon_kc9txj.png' alt='Profile' onClick={this.goToProfile}/>
        		</li>
        		<li className='navbar-item'>
              <button onClick={this.props.logout}>Logout</button>
        		</li>
          </ul>
        </nav>
      </div>
    );
  }

}


export default withRouter(Header);
