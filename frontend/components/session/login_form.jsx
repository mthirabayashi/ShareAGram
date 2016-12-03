import React from 'react';
import { Link, withRouter } from 'react-router';

class LoginForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user: user});
    this.setState({
      username: this.state.username,
      password: ''
    });
  }

  handleGuestLogin(e) {
    e.preventDefault();
    const user = {username: 'guest', password: 'password'};
    this.props.guestLogin({user: user});
  }

  updateField(field) {
    return (e) => (
      this.setState({[field]: e.target.value})
    );
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn){
      this.props.router.push('/');
    }
  }

  renderSignInErrors() {
    // debugger
    if (this.props.errors.logIn.length>0) {
      return (
        <ul>
          {this.props.errors.logIn.map( (error, idx) => (
            <li className='session-errors' key={idx}>{error}</li>
          ))}
        </ul>
      );
    } else {
      return;
    }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className='session-form'>
        <div className='session-image'>
          <img src='http://res.cloudinary.com/duep1w4tv/image/upload/v1478549134/ShareAGram/upjxcaax2u9wbgjtkqmg.jpg' alt='LOGO'/>
        </div>
        <div className='session-box'>
          <h2 className='session-app-title'>ShareAGram</h2>
          <div className='session-input-box'>
            <label>
              <input type='text' onChange={this.updateField('username')} value={this.state.username} placeholder='Username'className='session-input' ></input>
            </label>
            <br/>
            <label>
              <input type='password' onChange={this.updateField('password')} value={this.state.password} placeholder='Password'className='session-input' ></input>
            </label>
            <br/>
            <button type='submit' className='session-input'>{this.props.formType}</button>
            <br/>
            <h4 className='or-split'><span>OR</span></h4>
            <button type='submit' className='session-input' onClick={this.handleGuestLogin}>Log in as guest</button>
            <br/>
          </div>
        </div>
        {this.renderSignInErrors()}
        <div className='session-link'>
          <label className='session-font'>Don't have an account?
            <Link to='/signup'> Sign Up</Link>
          </label>
        </div>
      </form>
    );
  }
}

export default LoginForm;
