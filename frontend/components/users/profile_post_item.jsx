import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import merge from 'lodash/merge';

class ProfilePostItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
      editModalOpen: false,
      editModal: {
        id: this.props.post.id,
        imgUrl: this.props.post.img_url,
        description: this.props.post.description,
        author_id: this.props.post.author.author_id
      },
      comment: {
        profile_id: this.props.userProfile.author_id,
        body: '',
        post_id: this.props.post.id
      },
      adminButtons: false,
      commentLikeButtons: true
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.editOpenModal = this.editOpenModal.bind(this);
    this.editCloseModal = this.editCloseModal.bind(this);
    this.updateEditModal = this.updateEditModal.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.adminButton = this.adminButton.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.showComments = this.showComments.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.addComment = this.addComment.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.renderAdminButtons = this.renderAdminButtons.bind(this);
    this.toggleAdminButtons = this.toggleAdminButtons.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.post.description !== nextProps.post.description) {
      this.setState({modalOpen: true, adminButtons: false, commentLikeButtons: true});
    }
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
    // might want to delete current unsaved data upon closing
  }

  editCloseModal() {
    this.setState({ editModalOpen: false });
  }

  editOpenModal() {
    this.setState({
      modalOpen: false,
      editModalOpen: true
    });
  }

  updateEditModal(e) {
    const newState = merge({}, this.state.editModal, {['description']: e.target.value});
    this.setState({
      editModal: newState
    });
  }

  deletePost() {
    this.props.deletePost(this.props.post.id);
  }

  updatePost() {
    this.props.updatePost(this.state.editModal);
    this.setState({
      editModalOpen: false
    });
  }

  updateErrors() {
    if (this.props.errors) {
      return (
        <ul>
          {this.props.errors.createPost.map( (error, idx) => (
            <li key={'updatePost' + idx}>{error}</li>
          ))}
        </ul>
      );
    }
  }

  toggleLike () {
    if (this.props.currentUser.likedPosts.includes(this.props.post.id)) {
      this.props.deleteLike(this.props.post.id);
    } else {
      this.props.createLike(this.props.post.id);
    }
  }

  updateComment(e) {
    const newState = merge({}, this.state.comment, {['body']: e.target.value});
    this.setState({
      comment: newState
    });
  }

  addComment(e) {
    if (this.state.comment.body === '') {
      return;
    }
    e.preventDefault();
    this.props.createComment(this.state.comment);
    this.state.comment.body = '';
  }

  deleteComment(id) {
    return (e) => {
      e.preventDefault();
      this.props.deleteComment(id);
    };
  }

  adminButton() {
    if (this.props.currentUser.id === this.props.post.author.author_id) {
      return (
        <div>
          <section className='modal-profile-button-container'>
            <button className='modal-profile-button' onClick={this.deletePost}>
              Delete Post
            </button>
            <button className='modal-profile-button' onClick={this.editOpenModal}>
              Edit Post
            </button>
          </section>
          <button className='comment-profile-admin-toggle-admin' onClick={this.toggleAdminButtons}>
          </button>
        </div>

      );
    }
  }

  toggleAdminButtons() {
    if (this.state.adminButtons === true) {
      this.setState({adminButtons: false, commentLikeButtons: true});
    } else {
      this.setState({adminButtons: true, commentLikeButtons: false});
    }
  }

  renderAdminButtons() {
    if (this.state.adminButtons === true) {
      return (this.adminButton());
    }
  }

  commentLikeContainer() {
    const userLiked = (this.props.currentUser.likedPosts.includes(this.props.post.id));
    let heartColor;
    if (userLiked) {
      heartColor = 'red';
    } else {
      heartColor = 'lightgray';
    }
    const currentProfile = this.props.currentUser.id === this.props.userProfile.author_id ? 'comment-profile-admin-toggle' : 'hidden';
    return (
      <section className='comment-like-container'>

        <i className="fa fa-heart fa-2x post-item-heart" aria-hidden="true" style={{color:heartColor}} onClick={this.toggleLike}></i>

        <form className='comment-profile'>
          <input type='text' placeholder='Add a comment...' onChange={this.updateComment} value={this.state.comment.body}>
          </input>
          <button type='submit' onClick={this.addComment} className='hidden'>
          </button>
        </form>
        <button className={currentProfile} onClick={this.toggleAdminButtons}>
        </button>
      </section>
    );
  }

  renderCommentLikeContainer() {
    if (this.state.commentLikeButtons === true) {
      return (this.commentLikeContainer());
    }
  }

  showComments() {
    const deleteButtonClass = this.props.currentUser.username===this.props.userProfile.author_username ? "comment-instance-button" : "comment-instance-button-hidden";

    if (this.props.post.comments) {
      return (
        <section className='modal-profile-comments'>
          {(Object.keys(this.props.post.comments).map(id => this.props.post.comments[id])).map (comment => (
            <div className='comment-instance' key={'comment' + comment.id}>
              <h4><Link to={'/user/' + comment.author_id} className='profile-link' >{comment.username}</Link></h4>
              <p> {comment.body}</p>
              <button className={comment.username === this.props.currentUser.username ? "comment-instance-button" : deleteButtonClass} onClick={this.deleteComment(comment.id)}>
                X
              </button>
            </div>
          ))}
        </section>
      );
    }  else {
      return (
        <section className='modal-profile-comments'>
        </section>
      );
    }
  }

  showOverlay() {
    if (this.props.post.comments){
      return (
        <div className='upload-overlay'>
          <p>
            {this.props.post.likes}
          </p>
          <i className="fa fa-heart fa-1x" aria-hidden="true"></i>
          <p>
            {(Object.keys(this.props.post.comments)).length}
          </p>
          <i className="fa fa-comment"></i>
        </div>
      );
    } else {
      return (
        <div className='upload-overlay'>
          <p>
            {this.props.post.likes}
          </p>
          <i className="fa fa-heart fa-1x" aria-hidden="true"></i>
          <p>
            0
          </p>
          <i className="fa fa-comment"></i>
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
        left            : '12%',
        right           : '12%',
        top             : '17%',
        bottom          : '17%',
        border          : '1px solid #ccc',
        padding         : '0',
        zIndex          : 11
      }
    };



    return (
      <div className='profile-uploads-div'>
        <div className='profile-uploads-div-sub' onClick={this.openModal}>

          {this.showOverlay.bind(this)()}

          <img src={this.props.post.img_url}  className='profile-uploads'/>
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={style}
            className='modal-profile'>
              <div className='modal-profile-img-container'>
                <img src={this.props.post.img_url} className='modal-profile-img' />
              </div>
              <div className="modal-profile-postInfo">
                <div className='modal-profile-userInfo'>
                  <img src={this.props.post.author.author_pic} alt='posters profile pic' className='profile-pic-thumbnail'/>
                  <h3 >
                    {this.props.userProfile.author_username}
                  </h3>
                </div>
                <section className='modal-profile-likes'>
                  <p><span>{this.props.post.likes}</span> likes</p>
                  <p>{this.props.post.oldness}</p>
                </section>
                <section className='modal-profile-author'>
                  <h4 className='modal-profile-author-username'>{this.props.userProfile.author_username}</h4>
                  <p className='modal-profile-author-description'>
                    {this.props.post.description}
                  </p>
                </section>

                {this.showComments()}
                {this.renderCommentLikeContainer.bind(this)()}
                {this.renderAdminButtons()}
              </div>

          </Modal>


          <Modal
            isOpen={this.state.editModalOpen}
            onRequestClose={this.editCloseModal}
            style={style}
            className='modal-profile'>
              <div className='modal-profile-img-container'>
                <img src={this.state.editModal.imgUrl} className='modal-profile-img' />
              </div>
              <div className="modal-profile-postInfo">
                <div className='modal-profile-userInfo'>
                  <img src={this.props.post.author.author_pic} alt='posters profile pic' className='profile-pic-thumbnail'/>
                  <h3 >
                    {this.props.userProfile.author_username}
                  </h3>
                </div>
                <section className='modal-profile-likes'>
                  <p><span>{this.props.post.likes}</span> likes</p>
                  <p>{this.props.post.oldness}</p>
                </section>
                <section className='modal-profile-author'>
                  <h4 className='modal-profile-author-username'>{this.props.userProfile.author_username}</h4>

                  <textarea maxLength="150" value={this.state.editModal.description} onChange={this.updateEditModal} placeholder='Description cant be blank' className='modal-profile-author-edit-description'></textarea>
                </section>

                {this.updateErrors.bind(this)}
                {this.showComments()}
                <section className='modal-profile-button-container-save'>
                  <button onClick={this.updatePost} className='modal-profile-update-button'>
                    Save
                  </button>
                </section>
              </div>

          </Modal>

        </div>
      </div>
    );
  }
}

export default ProfilePostItem;
