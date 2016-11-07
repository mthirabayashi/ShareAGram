import React from 'react';
import { Link, withRouter } from 'react-router';
import PostItem from './post_item';
import Modal from 'react-modal';
import merge from 'lodash/merge';

// TODO: move Modal into its own component/container

class Posts extends React.Component {

  constructor(props){
    super(props);
    // console.log(props);
    this.displayAllPosts = this.displayAllPosts.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.updateModalField = this.updateModalField.bind(this);
    this.handleCreatePost = this.handleCreatePost.bind(this);
    this.createPostErrors = this.createPostErrors.bind(this);
    this.state = {
      modalOpen: false,
      modal: {
        img_url: '',
        description: ''
      }
    };
  }

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  componentDidUpdate() {
    if (this.props.errors.createPost.length ===1 && this.props.errors.createPost[0] === 'Successfully uploaded post') {
      this.props.router.replace('/');
    }
  }

  displayAllPosts() {
    // console.log(this.props);
    return (
      <div>
        {this.props.posts.slice(0).reverse().map(post => (
          <div key={"postIndex" + post.id} >
            <PostItem post={post} createLike={this.props.createLike} deleteLike={this.props.deleteLike}
            currentUserLikedPosts={this.props.currentUser.likedPosts}  />
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
    if (this.props.errors){
      this.props.clearErrors();
    }
    this.setState({
      modalOpen: false,
      modal: {
        img_url: '',
        description: ''
      }
    });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  updateModalField(field) {
    return (e) => {
      const newState = merge({}, this.state.modal, {[field]: e.target.value});
      this.setState({modal: newState});
    };
  }

  handleCreatePost(e) {
    e.preventDefault();
    let post = this.state.modal;
    post['author_id'] = this.props.currentUser.id;
    // console.log(post);
    this.props.createPost({post: post});
    // this.props.router.push(`/user`);
  }

  uploadImage(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, image) => {
        if (error===null) {
          //success
          // console.log(image[0]);
          const newState = merge({}, this.state.modal, {['img_url']: image[0].url});
          this.setState({modal: newState});
          // console.log(this.state);
        } else {
          // errors
        }
      }
    );
  }

  createPostErrors () {
    if (this.props.errors.createPost) {
      return (
        <ul className='create-post-error-list'>
          {this.props.errors.createPost.map((error, idx) => (
            <li key={"createError" + idx} className='create-post-error' >-{error}</li>
          ))}
        </ul>
      );
    }
  }

  render () {
    const style = {
      overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(255, 255, 255, 0.8)',
        zIndex          : 10
      },
      content : {
        position        : 'fixed',
        top             : '150px',
        left            : '200px',
        right           : '200px',
        bottom          : '150px',
        border          : '1px solid #ccc',
        padding         : '20px',
        zIndex          : 11
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
            <label>
              <button onClick={this.uploadImage.bind(this)}>Add an image</button>
            </label>
          <br />
          <br />
          <textarea type='text' placeholder='Add a description' rows="3" cols="30" maxLength="150" onChange={this.updateModalField('description')}></textarea>
          <br />
          <br />
          <button onClick={this.handleCreatePost}>Create Post</button>
          <br />
          <button onClick={this.closeModal}>Close</button>
          {this.createPostErrors()}
      </Modal>
      </div>
    );
  }
}

export default Posts;
