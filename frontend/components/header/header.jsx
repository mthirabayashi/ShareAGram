import React from 'react';
import { withRouter } from 'react-router';

class Header extends React.Component {
  constructor (props) {
    super(props);
    console.log(props);
    this._ensureSignedIn = this._ensureSignedIn.bind(this);
  }

  componentDidUpdate() {
    this._ensureSignedIn();
  }

  _ensureSignedIn () {
    if (!this.props.currentUser) {
      this.props.router.push('/login');
    }
  }

  render() {
    return(
      <div className='header'>
        <section className='logo-title'>
          <section className='logo'>
            <img src='http://3835642c2693476aa717-d4b78efce91b9730bcca725cf9bb0b37.r51.cf1.rackcdn.com/Instagram_App_Large_May2016_200.png' alt='LOGO' />
          </section>
          <section className='title'>
            ShareAGram
          </section>
        </section>
        <section className='search-bar'>
          <input type='text' placeholder='Search'></input>
        </section>
        <nav className='navbar'>
          <ul className='navbar-list'>
        		<li className='navbar-item'>
              <img src='http://www.freeiconspng.com/uploads/profile-icon-9.png' alt='Profile' />
        		</li>
        		<li className='navbar-item'>
              <button onClick={this.props.logout}>Logout</button>
        		</li>
          </ul>
        </nav>
      </div>
    );
  }

};


export default withRouter(Header);
