import React from 'react';
import { Link, withRouter } from 'react-router';
import ProfilePostItem from './profile_post_item';
import Modal from 'react-modal';
import merge from 'lodash/merge';

class Profile extends React.Component {

  constructor(props){
    super(props);
    // this.state = {
    //   modalOpen: false,
    //   modal: {
    //     imgUrl: '',
    //     description: ''
    //   }
    // };
    this.userPosts = this.userPosts.bind(this);
    // this.openModal = this.openModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
    // this.updateModalField = this.updateModalField.bind(this);
  }

  componentDidMount() {
  }

  // closeModal() {
  //   this.setState({ modalOpen: false });
  // }
  //
  // openModal() {
  //   this.setState({ modalOpen: true });
  // }
  //
  // updateModalField() {
  //   return (e) => {
  //     console.log(e.target);
  //     let selectedPhoto = e.target.src;
  //     console.log(selectedPhoto);
  //     const newState = merge({}, this.state.modal, {['imgUrl']: selectedPhoto});
  //     this.setState({modal: newState});
  //     this.openModal();
  //   };
  // }

  userPosts() {

    //   <img src={post.img_url}  alt='NO IMAGE HERE, ok' className='profile-uploads' key={"profile-upload" + post.id} id={post.id} description={post.description} onClick={this.updateModalField()} />
    // ))}
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

  render () {
    // console.log(this.props);


    return (
      <div className='profile-container'>
        <div className='profile-userInfo'>
          <img src={this.props.user.profile_pic} className='profile-pic'/>
          <section className='profile-stats-container'>
            <section className='profile-stats-username-follow'>
              <h1 className='profile-stats-username'>{this.props.user.username}</h1>
              <button>Follow Button - No Work</button>
            </section>
            <div className='profile-stats'>
              <section><span>{this.props.posts.length} </span>posts</section>
              <section># followers</section>
              <section># following</section>
            </div>
          </section>
        </div>
        {this.userPosts()}
      </div>
    );
  }
}

export default Profile;


// const style = {
//   overlay : {
//     position        : 'fixed',
//     top             : 0,
//     left            : 0,
//     right           : 0,
//     bottom          : 0,
//     backgroundColor : 'rgba(255, 255, 255, 0.8)',
//     zIndex          : 10
//   },
//   content : {
//     position        : 'fixed',
//     left            : '15%',
//     right           : '15%',
//     top             : '100px',
//     bottom          : '150px',
//     border          : '1px solid #ccc',
//     padding         : '0',
//     zIndex          : 11
//   }
// };

// <Modal
//   isOpen={this.state.modalOpen}
//   onRequestClose={this.closeModal}
//   style={style}
//   className='modal-profile'>
//     <div className='modal-profile-img-container'>
//       <img src={this.state.modal.imgUrl} className='modal-profile-img' />
//     </div>
//     <div className="modal-profile-postInfo">
//       <div className='modal-profile-userInfo'>
//         <img src='http://fc07.deviantart.net/fs38/f/2008/344/c/5/Punk_Band_Rubber_Duck_by_Oriana_X_Myst.jpg' alt='posters profile pic' className='profile-pic-thumbnail'/>
//         <h3 >
//           {this.props.user.username}
//         </h3>
//       </div>
//       <section className='modal-profile-likes'>
//         <h5># of Likes</h5>
//         <p>oldness</p>
//       </section>
//       <section className='modal-profile-author'>
//         <h4 className='modal-profile-author-username'>{this.props.user.username}</h4>
//         <p className='modal-profile-author-description'>  post description from author test test test test test test test test test test</p>
//       </section>
//       <section className='modal-profile-comments'>
//         <ul>
//           Comments
//         </ul>
//       </section>
//       <section className='modal-profile-button-container'>
//         <button className='modal-profile-button'>
//           Delete Post
//         </button>
//         <button className='modal-profile-button'>
//           Edit Post
//         </button>
//       </section>
//     </div>
//
// </Modal>
