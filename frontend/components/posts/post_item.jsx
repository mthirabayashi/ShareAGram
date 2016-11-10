import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';

class PostItem extends React.Component {

  constructor(props){
    super(props);
    // console.log(props);
    const liked = this.props.post.likes === 1 ? true : false;

    this.state = {
      comment: {
        body: '',
        post_id: this.props.post.id
      }
    };
    this.goToProfile = this.goToProfile.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.addComment = this.addComment.bind(this);
    this.showComments = this.showComments.bind(this);
  }

  goToProfile(e) {
    e.preventDefault();
    this.props.router.push(`/user/${this.props.post.author.author_id}`);
  }

  toggleLike () {
    // console.log('toggle like');
    // debugger
    if (this.props.currentUserLikedPosts.includes(this.props.post.id)) {
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

  showComments() {
    // console.log(this.props);
    if (this.props.post.comments) {
      return (
        <section className='comments-container'>
          {(Object.keys(this.props.post.comments).map(id => this.props.post.comments[id])).map (comment => (
            <div className='comment-instance' key={'comment' + comment.id}>
              <h4><Link to={'/user/' + comment.author_id} className='profile-link' >{comment.username}</Link></h4>
              <p> {comment.body}</p>
              <button className={comment.username === this.props.currentUsername ? "comment-instance-button" : "comment-instance-button-hidden"} onClick={this.deleteComment(comment.id)}>
                X
              </button>
            </div>
          ))}
        </section>
      );
    }
  }

  render () {
    // console.log(this.props.post);
    const userLiked = (this.props.currentUserLikedPosts.includes(this.props.post.id));
    let heartColor;
    if (userLiked) {
      heartColor = 'red';
    } else {
      heartColor = 'lightgray';
    }
    // if (userLiked) {
    //   heartColor = 'like-button-red';
    // } else {
    //   heartColor = 'like-button';
    // }
    const prof_url = `/user/${this.props.post.author.author_id}`;
    const plural = (this.props.post.likes===1) ? 'like' : 'likes';
    // console.log(plural);
    // <button className={heartColor} onClick={this.toggleLike}></button>
    return (
      <div className='post-item' >
        <div className='poster-pic-name'>
          <section className='poster-pic-name-leftside'>
            <img src={this.props.post.author.author_pic} alt='posters profile pic' className='profile-pic-thumbnail'/>
            <Link to={prof_url} className='profile-link' >{this.props.post.author.author_username}</Link>
          </section>
          <p className='oldness'>{this.props.post.oldness}</p>
        </div>
        <div className='post-item-photo'>
          <img src={this.props.post.img_url} alt='IMAGE NO HERE'/>
        </div>
        <div className='post-description'>
          <div className='like-count'><span>{this.props.post.likes}</span> {plural}</div>
          <h4><Link to={prof_url} className='profile-link' >{this.props.post.author.author_username}</Link></h4>
          <p> {this.props.post.description}</p>
        </div>
        {this.showComments()}
        <section className='comment-like-container'>
          <i className="fa fa-heart fa-2x post-item-heart" aria-hidden="true" style={{color:heartColor}} onClick={this.toggleLike}></i>
          <form className='comment'>
            <input type='text' placeholder='Add a comment...' onChange={this.updateComment} value={this.state.comment.body}>
            </input>
            <button type='submit' onClick={this.addComment} className='hidden'>Add Comment</button>
          </form>
        </section>
      </div>
    );
  }
}

export default PostItem;
