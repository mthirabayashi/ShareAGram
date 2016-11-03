import React from 'react';
import { Link, withRouter } from 'react-router';
import PostItem from '../posts/post_item';

class Profile extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  postList() {

    return (
      <div>
        {this.props.posts.slice(0).reverse().map(post => (
          <img src={post.img_url} className='profile-pic-uploads' key={post.id}/>
        ))}
      </div>
    );
  }

  render () {
    // console.log(this.props);
    return (
      <div>
        <h1>You are probably {this.props.currentUser.username}?</h1>
        <h3>with userid: {this.props.currentUser.id}</h3>
        {this.postList()}
      </div>
    );
  }
}

export default Profile;
