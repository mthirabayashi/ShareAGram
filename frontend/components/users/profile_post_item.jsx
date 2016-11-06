import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import merge from 'lodash/merge';

class ProfilePostItem extends React.Component {

  constructor(props){
    // console.log(props);
    super(props);
    this.state = {
      modalOpen: false,
      modal: {
        imgUrl: '',
        description: ''
      }
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateModalField = this.updateModalField.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.adminButton = this.adminButton.bind(this);
  }

  componentDidMount() {
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  updateModalField() {
    return (e) => {
      // console.log(e.target);
      let selectedPhoto = e.target.src;
      // console.log(selectedPhoto);
      const newState = merge({}, this.state.modal, {['imgUrl']: selectedPhoto});
      this.setState({modal: newState});
      this.openModal();
    };
  }

  deletePost() {
    return (e) => {
      console.log('delete post' + this.props.post.id);
      console.log(this.props);
      this.props.deletePost(this.props.post.id);
    };
  }

  adminButton() {
    if (this.props.currentUser.id === this.props.post.author.author_id) {
      return (
        <section className='modal-profile-button-container'>
          <button className='modal-profile-button' onClick={this.deletePost()}>
            Delete Post
          </button>
          <button className='modal-profile-button'>
            Edit Post
          </button>
        </section>
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
        left            : '15%',
        right           : '15%',
        top             : '100px',
        bottom          : '150px',
        border          : '1px solid #ccc',
        padding         : '0',
        zIndex          : 11
      }
    };

    return (
      <div>
        <img src={this.props.post.img_url} onClick={this.updateModalField()} className='profile-uploads'/>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}
          className='modal-profile'>
            <div className='modal-profile-img-container'>
              <img src={this.state.modal.imgUrl} className='modal-profile-img' />
            </div>
            <div className="modal-profile-postInfo">
              <div className='modal-profile-userInfo'>
                <img src='http://fc07.deviantart.net/fs38/f/2008/344/c/5/Punk_Band_Rubber_Duck_by_Oriana_X_Myst.jpg' alt='posters profile pic' className='profile-pic-thumbnail'/>
                <h3 >
                  {this.props.userProfile.author_username}
                </h3>
              </div>
              <section className='modal-profile-likes'>
                <p><span>500</span> likes</p>
                <p>oldness</p>
              </section>
              <section className='modal-profile-author'>
                <h4 className='modal-profile-author-username'>{this.props.userProfile.author_username}</h4>
                <p className='modal-profile-author-description'>
                  {this.props.post.description}
                </p>
              </section>
              <section className='modal-profile-comments'>
                <ul>
                  Comments
                </ul>
              </section>
              {this.adminButton()}
            </div>

        </Modal>
      </div>
    );
  }
}

export default ProfilePostItem;
