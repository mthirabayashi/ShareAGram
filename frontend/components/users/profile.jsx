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
  }

  componentDidMount() {
  }

  toggleFollow() {
    // console.log(this.props);
    // console.log('temp toggle follow');
    // console.log('for user ' + this.props.user.id);
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
        </section>
      );
    } else {
      return (
        <section className='profile-stats-container'>
          <section className='profile-stats-username-follow'>
            <h1 className='profile-stats-username'>{this.props.user.username}</h1>
            <button className='profile-stats-edit-button'>Edit Profile</button>
          </section>
          <div className='profile-stats'>
            <section><span>{this.props.posts.length} </span>posts</section>
            <section>{this.props.user.followers} followers</section>
            <section>{this.props.user.following.length} following</section>
          </div>
        </section>
      );
    }
  }

  render () {
    console.log(this.props);
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
      <div className='profile-container'>
        <div className='profile-userInfo'>
          <img src={this.props.user.profile_pic} className='profile-pic'/>
          {this.userStats()}
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
