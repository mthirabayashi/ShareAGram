import React from 'react';
import { Link, withRouter } from 'react-router';

class PostItem extends React.Component {

  constructor(props){
    super(props);
    // console.log(props);
    const liked = this.props.post.likes === 1 ? true : false;

    this.state = {
      liked: liked
    };
    this.goToProfile = this.goToProfile.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
  }

  goToProfile(e) {
    e.preventDefault();
    this.props.router.push(`/user/${this.props.post.author.author_id}`);
  }

  toggleLike () {
    // console.log('toggle like');
    // debugger
    if (this.props.currentUserLikedPosts.includes(this.props.post.id)) {
      // console.log('delete like for post' + this.props.post.id);
      this.props.deleteLike(this.props.post.id);
    } else {
      // console.log('create like for post' + this.props.post.id);
      this.props.createLike(this.props.post.id);
    }
  }

  render () {
    const prof_url = `/user/${this.props.post.author.author_id}`;
    return (
      <div className='post-item' >
        <div className='poster-pic-name'>
          <img src={this.props.post.author.author_pic} alt='posters profile pic' className='profile-pic-thumbnail'/>
          <Link to={prof_url} className='profile-link' >{this.props.post.author.author_username}</Link>
        </div>
        <div className='post-item-photo'>
          <img src={this.props.post.img_url} alt='IMAGE NO HERE'/>
        </div>
        <div className='post-description'>
          <div className='like-count'>{this.props.post.likes} likes</div>
          <h4><Link to={prof_url} className='profile-link' >{this.props.post.author.author_username}</Link></h4>
          <p> {this.props.post.description} additional comment detail that makes it wrap around #greatcoment #makethisareallylonghashtagthatwillcausethetexttogooutofboundsofmycontainertestestestestestestestestestestestest</p>
        </div>
        <section className='comment-like-container'>
          <button className='like-button' onClick={this.toggleLike}></button>
          <form className='comment'>
            <input type='text' placeholder='Add a comment...'>

            </input>
          </form>
        </section>
      </div>
    );
  }
}

export default PostItem;
