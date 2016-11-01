import React from 'react';
import { Link, withRouter } from 'react-router';

class Greeting extends React.Component {

  constructor(props){
    super(props);
  }


  render () {
    if (this.props.currentUser) {
      return (
        <div>
          <h2>Welcome {this.props.currentUser.username}!</h2>
          <button onClick={this.props.logout}>Sign Out</button>
        </div>
      );
    } else {
      return (
        <div>
          <h2>No user currently signed in</h2>
        </div>
      );
    }
  }
}

export default Greeting;
