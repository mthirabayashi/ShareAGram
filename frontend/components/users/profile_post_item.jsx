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
      editModalOpen: false,
      editModal: {
        id: this.props.post.id,
        imgUrl: this.props.post.img_url,
        description: this.props.post.description,
        author_id: this.props.post.author.author_id
      }
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.editOpenModal = this.editOpenModal.bind(this);
    this.editCloseModal = this.editCloseModal.bind(this);
    this.updateEditModal = this.updateEditModal.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.adminButton = this.adminButton.bind(this);
    this.updatePost = this.updatePost.bind(this);
  }

  componentDidMount() {
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
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
    console.log('post description updated');
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
    const newState = merge({}, this.state.editModal, {['description']: e.target.value});
    this.setState({
      editModal: newState
    });
  }

  adminButton() {
    if (this.props.currentUser.id === this.props.post.author.author_id) {
      return (
        <section className='modal-profile-button-container'>
          <button className='modal-profile-button' onClick={this.deletePost}>
            Delete Post
          </button>
          <button className='modal-profile-button' onClick={this.editOpenModal}>
            Edit Post
          </button>
        </section>
      );
    }
  }

  deletePost() {
    this.props.deletePost(this.props.post.id);
  }

  updatePost() {
    // console.log('update post with');
    // console.log(this.state.editModal);
    this.props.updatePost(this.state.editModal);
    // this.setState({
    //   modalOpen: true,
    //   editModalOpen: false
    // });
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
        <img src={this.props.post.img_url} onClick={this.openModal} className='profile-uploads'/>
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
                <p><span>500</span> likes</p>
                <p>oldness</p>
              </section>
              <section className='modal-profile-author'>
                <h4 className='modal-profile-author-username'>{this.props.userProfile.author_username}</h4>
                <input type='text' value={this.state.editModal.description} onChange={this.updateEditModal} className='modal-profile-author-description'></input>
              </section>
              <section className='modal-profile-comments'>
                <ul>
                  Comments
                </ul>
              </section>
              {this.updateErrors.bind(this)}
              <button onClick={this.updatePost}>
                Save
              </button>
            </div>

        </Modal>
      </div>
    );
  }
}

export default ProfilePostItem;
