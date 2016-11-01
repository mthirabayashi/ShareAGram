import React from 'react';
import { Link, withRouter } from 'react-router';

class SignUpForm extends React.Component {

  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      email: '',
      full_name: '',
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

  renderSignUpErrors() {
    // debugger
    if (this.props.errors.user.length>0) {
      return (
        <ul>Errors:
          {this.props.errors.user.map( (error, idx) => (
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
        <div className='session-box'>
          <h2>ShareAGram</h2>
          <p>Sign up to see photos from your friends.</p>
          {this.renderSignUpErrors()}
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
          <br/>
          <button className='session-input' type='submit'>{this.props.formType}</button>
          <br/>
          <br/>
        </div>

        <div className='session-link'>
          <label>Have an account?
            <Link to='/login'> Log in</Link>
          </label>
        </div>
      </form>
    );
  }
}

export default SignUpForm;
