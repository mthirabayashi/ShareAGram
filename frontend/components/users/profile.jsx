import React from 'react';
import { Link, withRouter } from 'react-router';
import PostItem from '../posts/post_item';

class Profile extends React.Component {

  constructor(props){
    super(props);
    this.userPosts = this.userPosts.bind(this);
  }

  componentDidMount() {
  }

  userPosts() {

    return (
      <div>
        {this.props.posts.slice(0).reverse().map(post => (
          <img src={post.img_url}  alt='NO IMAGE HERE, ok' className='profile-pic-uploads' key={"profile-upload" + post.id}  />
        ))}
      </div>
    );
  }

  render () {
    // console.log(this.props);
    return (
      <div>
        <h1>You are probably {this.props.user.username}?</h1>
        <h3>with userid: {this.props.user.id}</h3>
        {this.userPosts()}
      </div>
    );
  }
}

export default Profile;
