import React from 'react';
import { Link, withRouter } from 'react-router';

class SignUpForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      full_name: '',
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

  renderSignUpErrors() {
    // debugger
    if (this.props.errors.signUp.length>0) {
      return (
        <ul>
          {this.props.errors.signUp.map( (error, idx) => (
            <li className='session-errors' key={idx}>-{error}</li>
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
        <button className='default-session-button' type='submit'></button>
        <div className='session-image'>
          <img src='http://res.cloudinary.com/duep1w4tv/image/upload/v1478549134/ShareAGram/upjxcaax2u9wbgjtkqmg.jpg' alt='LOGO'/>
        </div>
        <div className='session-box'>
          <h2 className='session-app-title'>ShareAGram</h2>
          <p className='session-font'>Sign up to see photos from your friends</p>
          <div className='session-input-box'>
            <button type='submit' className='session-input' onClick={this.handleGuestLogin}>Log in as guest</button>
            <br/>
            <h4 className='or-split'><span>OR</span></h4>
            <label>
              <input type='text' onChange={this.updateField('email')} value={this.state.email} placeholder='Email' className='session-input'></input>
            </label>
            <br/>
            <label>
              <input type='text' onChange={this.updateField('fullName')} value={this.state.fullName} placeholder='Full Name' className='session-input'></input>
            </label>
            <br/>
            <label>
              <input type='username' onChange={this.updateField('username')} value={this.state.username} placeholder='Username' className='session-input'></input>
            </label>
            <br/>
            <label>
              <input type='password' onChange={this.updateField('password')} value={this.state.password} placeholder='Password' className='session-input'></input>
            </label>
            <br/>
            <button className='session-input' type='submit'>{this.props.formType}</button>
            <br/>
            <br/>
          </div>
        </div>
        <div className='signup-errors'>
          {this.renderSignUpErrors()}
        </div>

        <div className='session-link'>
          <label className='session-font'>Have an account?
            <Link to='/login'> Log in</Link>
          </label>
        </div>
      </form>
    );
  }
}

export default SignUpForm;
