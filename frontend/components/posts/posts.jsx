import React from 'react';
import { Link, withRouter } from 'react-router';
import PostItem from './post_item';
import Modal from 'react-modal';
import merge from 'lodash/merge';
import $ from 'jquery';

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
        description: '',
        thumbnail_url: ''
      }
    };
  }

  componentDidMount() {
    this.props.fetchAllPosts();
    let waiting = false;
    let endScrollHandle;
    const fetchMore = () => {
      if (document.body.offsetHeight - window.scrollY < 1250) {
        // console.log('reached bottom of page');
        // console.log(this.props.posts.length);
        // console.log('fetching more posts');
        this.props.fetchMorePosts(this.props.posts.length);
      }
    };
    $(document).on('scroll', () => {
      if (waiting) {
        return;
      }
      waiting = true;
      clearTimeout(endScrollHandle);
      // console.log('Scrolling!');
      fetchMore();
      setTimeout(() => {
        waiting = false;
      }, 300);
      endScrollHandle = setTimeout(() => {
        fetchMore();
      }, 500);
    });
  }

  componentWillUnmount() {
    $(document).off( "scroll");
    // console.log('clearing posts after leaving posts index');
    this.props.clearPosts();
  }

  componentDidUpdate() {
  }

  componentWillReceiveProps(newProps) {
    // console.log(newProps.posts);
    // console.log(this.props.posts);
    if (this.props.posts.length < newProps.posts.length) {
      this.closeModal();
    }

  }

  displayAllPosts() {
    // console.log(this.props);
    return (
        <div>
          {this.props.posts.slice(0).reverse().map(post => (
            <div key={"postIndex" + post.id} >
              <PostItem post={post} createLike={this.props.createLike} deleteLike={this.props.deleteLike}
                currentUserLikedPosts={this.props.currentUser.likedPosts} createComment={this.props.createComment} currentUsername={this.props.currentUser.username}deleteComment={this.props.deleteComment} />
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
    // console.log(ENV['CLOUD_NAME']);
    // console.log(Figaro.env.CLOUD_NAME);
    window.cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, image) => {
        if (error===null) {
          //success
          // console.log(image[0]);
          // console.log(image[0].thumbnail_url);
          const newState = merge({}, this.state.modal, {['img_url']: image[0].url, ['thumbnail_url']: image[0].thumbnail_url});
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

  imageThumbail() {
    // console.log('image thumbnail_url');
    if (this.state.modal.thumbnail_url) {
      return (
        <div>
          <img src={this.state.modal.thumbnail_url} />
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <br />
        </div>
      );
    }
  }

  render () {
    // console.log(this.props);
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
        top             : '15%',
        left            : '15%',
        right           : '15%',
        bottom          : '15%',
        border          : '1px solid #ccc',
        padding         : '20px',
        zIndex          : 11
      }
    };
    return (
      <div className='posts-feed' onClick={this.props.clearSearch}>
        <br/>
        <br/>
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
          <h2 className='modal-new-post-title'>New Post</h2>
          <button className='profile-stats-follow-button' onClick={this.uploadImage.bind(this)}>
            Add an image
          </button>
          {this.imageThumbail.bind(this)()}
          <br />
          <textarea type='text' placeholder='Add a description' rows="3" cols="30" maxLength="150" onChange={this.updateModalField('description')}></textarea>
          <br />
          <br />
          <button className='profile-stats-follow-button' onClick={this.handleCreatePost}>Create Post</button>
          <br />
          <button className='profile-stats-follow-button' onClick={this.closeModal}>Close</button>
          {this.createPostErrors()}
      </Modal>
      </div>
    );
  }
}

export default Posts;
