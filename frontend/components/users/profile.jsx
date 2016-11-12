import React from 'react';
import { Link, withRouter } from 'react-router';
import ProfilePostItem from './profile_post_item';
import Modal from 'react-modal';
import merge from 'lodash/merge';

class Profile extends React.Component {

  constructor(props){
    super(props);
    this.userPosts = this.userPosts.bind(this);
    this.toggleFollow = this.toggleFollow.bind(this);
    this.userStats = this.userStats.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateModalField = this.updateModalField.bind(this);
    this.imageThumbail = this.imageThumbail.bind(this);
    const initialFullName = this.props.user.full_name ? this.props.user.full_name : '';
    this.state={
      modalOpen: false,
      modal: {
        id: '',
        profile_pic: '',
        full_name: initialFullName,
        thumbnail_url: ''
      }
    };
  }

  componentWillReceiveProps(nextProps) {

  }

  closeModal() {
    const newState = {full_name: this.props.user.full_name};
    this.setState({
      modalOpen: false,
      modal: newState
    });
  }

  openModal() {
    const newState = {full_name: this.props.user.full_name};
    this.setState({
      modalOpen: true,
      modal: newState
    });
    // might want to delete current unsaved data upon closing
  }

  uploadImage(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, image) => {
        if (error===null) {
          const newState = merge({}, this.state.modal, {['profile_pic']: image[0].url, ['thumbnail_url']: image[0].thumbnail_url});
          this.setState({modal: newState});
        } else {
          // errors
        }
      }
    );
  }

  updateModalField(field) {
    return (e) => {
      const newState = merge({}, this.state.modal, {[field]: e.target.value});
      this.setState({modal: newState});
    };
  }

  imageThumbail() {
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

  handleEditUser() {
    let updatedUser = this.state.modal;
    updatedUser.id = this.props.user.id;
    if (this.state.modal.profile_pic === '') {
      updatedUser.profile_pic = this.props.user.profile_pic;
    }
    const newState = {profile_pic: '', thumbnail_url: ''};
    this.props.updateUser(updatedUser);
    this.setState({
      modalOpen: false,
      modal: newState
    });
  }

  toggleFollow() {
    if (this.props.currentUser.following.includes(this.props.user.id)) {
      this.props.deleteFollow(this.props.user.id);
    } else {
      this.props.createFollow(this.props.user.id);
    }
  }

  userPosts() {

    return (
      <div className='profile-uploads-container'>
        {this.props.posts.slice(0).reverse().map(post => (
          <ProfilePostItem key={"profile-upload" + post.id} post={post} userProfile={post.author} currentUser={this.props.currentUser} deletePost={this.props.deletePost}
          updatePost={this.props.updatePost} deleteComment={this.props.deleteComment} createComment={this.props.createComment}
          createLike={this.props.createLike} deleteLike={this.props.deleteLike}
          className='profile-uploads'/>
        ))}
      </div>
    );
  }

  userStats() {
    let followText;
    let followButtonClass;
    if (this.props.currentUser.following.includes(this.props.user.id)) {
      followText = 'Following';
      followButtonClass = 'profile-stats-following-button';
    } else {
      followText = 'Follow';
      followButtonClass = 'profile-stats-follow-button';
    }
    if (this.props.currentUser.id !== this.props.user.id){
      return (
        <section className='profile-stats-container'>
          <section className='profile-stats-username-follow'>
            <h1 className='profile-stats-username'>{this.props.user.username}</h1>
            <button onClick={this.toggleFollow} className={followButtonClass}>{followText}</button>
          </section>
          <div className='profile-stats'>
            <section><span>{this.props.posts.length} </span>posts</section>
            <section>{this.props.user.followers} followers</section>
            <section>{this.props.user.following.length} following</section>
          </div>
          <div className='profile-stats-full-name'>
            <p>{this.props.user.full_name}</p>
          </div>
        </section>
      );
    } else {
      return (
        <section className='profile-stats-container'>
          <section className='profile-stats-username-follow'>
            <h1 className='profile-stats-username'>{this.props.user.username}</h1>
            <button className='profile-stats-edit-button' onClick={this.openModal}>Edit Profile</button>
          </section>
          <div className='profile-stats'>
            <section><span>{this.props.posts.length} </span>posts</section>
            <section>{this.props.user.followers} followers</section>
            <section>{this.props.user.following.length} following</section>
          </div>
          <div className='profile-stats-full-name'>
            <p>{this.props.user.full_name}</p>
          </div>
        </section>
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
        left            : '20%',
        right           : '20%',
        top             : '20%',
        bottom          : '20%',
        border          : '1px solid #ccc',
        padding         : '0',
        zIndex          : 11
      }
    };




    let followText;
    let followButtonClass;
    if (this.props.currentUser.following.includes(this.props.user.id)) {
      followText = 'Following';
      followButtonClass = 'profile-stats-following-button';
    } else {
      followText = 'Follow';
      followButtonClass = 'profile-stats-follow-button';
    }
    return (
      <div className='profile-container' onClick={this.props.clearSearch}>
        <div className='profile-userInfo'>
          <img src={this.props.user.profile_pic} className='profile-pic'/>
          {this.userStats()}
        </div>
        {this.userPosts()}

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}
          className='modal-profile'>
          <div className='modal-profile-img-container'>
            <img src={this.props.user.profile_pic} className='modal-profile-img' />
          </div>
          <div className="modal-edit-profile">
            <form className='modal-edit-profile-pic-name'>
              <button className='hidden' onClick={this.handleEditUser.bind(this)}>
              </button>
              <button className='modal-profile-update-button-pic' onClick={this.uploadImage.bind(this)}>
                Change Profile Picture
              </button>
              {this.imageThumbail.bind(this)()}
              <label className='modal-profile-fullname'>Full Name
                  <input type='text' placeholder={this.state.modal.full_name} value={this.state.modal.full_name} onChange={this.updateModalField('full_name')}>
                  </input>
              </label>
            </form>
            <section className='modal-profile-button-container-save'>
              <button className='modal-profile-update-button' onClick={this.handleEditUser.bind(this)}>
                Save
              </button>
            </section>
          </div>


        </Modal>

      </div>
    );
  }
}

export default Profile;
