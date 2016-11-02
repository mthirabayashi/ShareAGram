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
    if (this.props.errors.session.length>0) {
      return (
        <ul>
          {this.props.errors.session.map( (error, idx) => (
            <li key={idx}>{error}</li>
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
          <img src='http://us.mullenlowe.com/wp-content/uploads//2013/10/instagramlogo.jpg' alt='LOGO'/>
        </div>
        <div className='session-box'>
          <h2>ShareAGram</h2>
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
          <br/>
          <br/>
          <button type='submit' className='session-input'>Log in as guest</button>
          <br/>
        </div>
        {this.renderSignInErrors()}
        <div className='session-link'>
          <label>Don't have an account?
            <Link to='/signup'> Sign Up</Link>
          </label>
        </div>
      </form>
    );
  }
}

export default LoginForm;
