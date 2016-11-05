import React from 'react';
import { Link, withRouter } from 'react-router';
import PostItem from '../posts/post_item';
import Modal from 'react-modal';
import merge from 'lodash/merge';

class Profile extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
      modal: {
        imgUrl: '',
        description: ''
      }
    };
    this.userPosts = this.userPosts.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateModalField = this.updateModalField.bind(this);
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
      let selectedPhoto = e.target.src;
      console.log(selectedPhoto);
      const newState = merge({}, this.state.modal, {['imgUrl']: selectedPhoto});
      this.setState({modal: newState});
      this.openModal();
    };
  }

  userPosts() {

    return (
      <div className='profile-uploads-container'>
        {this.props.posts.slice(0).reverse().map(post => (
          <img src={post.img_url}  alt='NO IMAGE HERE, ok' className='profile-uploads' key={"profile-upload" + post.id}  onClick={this.updateModalField()} />
        ))}
      </div>
    );
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
        <img src={this.props.user.profile_pic} className='profile-pic'/>
        <h1>You are probably {this.props.user.username}?</h1>
        <h3>with userid: {this.props.user.id}</h3>
        {this.userPosts()}
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
                  {this.props.user.username}
                </h3>
              </div>
              <section className='modal-profile-likes'>
                <h5># of Likes</h5>
                <h5>oldness</h5>
              </section>
              <section >
                <h4> posters username </h4>
                <p>post description from author</p>
              </section>
              <section>
                Comments
              </section>
              <button>
                Edit Post
              </button>
              <button>
                Delete Post
              </button>
            </div>

        </Modal>
      </div>
    );
  }
}

export default Profile;
