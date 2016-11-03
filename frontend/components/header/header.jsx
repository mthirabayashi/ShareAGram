import React from 'react';
import { withRouter } from 'react-router';

class Header extends React.Component {
  constructor (props) {
    super(props);
    console.log(props);
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
    this.props.router.push(`/user`);
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
            <img src='http://3835642c2693476aa717-d4b78efce91b9730bcca725cf9bb0b37.r51.cf1.rackcdn.com/Instagram_App_Large_May2016_200.png' alt='LOGO' onClick={this.goToHome}/>
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
              <img src='http://www.freeiconspng.com/uploads/profile-icon-9.png' alt='Profile' onClick={this.goToProfile}/>
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
