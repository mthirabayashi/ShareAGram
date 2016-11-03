import React from 'react';
import { Link, withRouter } from 'react-router';
import PostItem from './post_item';
import Modal from 'react-modal';

class Posts extends React.Component {

  constructor(props){
    super(props);
    console.log(props);
    this.displayAllPosts = this.displayAllPosts.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.state = {
      modalOpen: false
    };
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

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }


  render () {
    const style = {
      overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(255, 255, 255, 0.75)',
        zIndex      : 10
      },
      content : {
        position        : 'fixed',
        top             : '150px',
        left            : '200px',
        right           : '200px',
        bottom          : '150px',
        border          : '1px solid #ccc',
        padding         : '20px',
        zIndex         : 11
      }
    };
    return (
      <div className='posts-feed'>
        <h1 className='posts'>posts feed here</h1>
        <br/>
        {this.displayAllPosts()}
        <span className='create-post-button'>
          <img src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151116_564931cb68cc2.png' alt='create post button' onClick={this.openModal} />
        </span>
        <Modal
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}
        style={style}
        className='modal'>
          <h2>New Post</h2>
          <br />
          <button>Add Image</button>
          <br />
          <br />
          <textarea type='text' placeholder='Add a description' rows="3" cols="30"></textarea>
          <br />
          <br />
          <button onClick={()=>(console.log('submit modal'))}>Create Post</button>
          <br />
          <button onClick={this.closeModal}>Close</button>

      </Modal>
      </div>
    );
  }
}

export default Posts;
