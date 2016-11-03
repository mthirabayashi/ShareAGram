import React from 'react';
import { Link, withRouter } from 'react-router';
import PostItem from './post_item';

class Posts extends React.Component {

  constructor(props){
    super(props);
    console.log(props);
    this.displayAllPosts = this.displayAllPosts.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllPosts();
    console.log('fetching posts');
  }

  displayAllPosts() {
    return (
      <div>
        {this.props.posts.map(post => (
          <div key={post.id} >
            <PostItem post={post} />
            <br />
            <br />
            <br />
            <br />
          </div>
        ))}
      </div>
    );
  }

  render () {
    return (
      <div className='posts-feed'>
        <h1 className='posts'>posts feed here</h1>
        <br/>
        {this.displayAllPosts()}
        <span className='create-post-button'>
          <img alt='create post button'/>
        </span>
      </div>
    );
  }
}

export default Posts;
