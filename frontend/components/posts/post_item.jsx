import React from 'react';
import { Link, withRouter } from 'react-router';

class PostItem extends React.Component {

  constructor(props){
    super(props);
    // console.log(props);
    this.goToProfile = this.goToProfile.bind(this);
  }

  goToProfile(e) {
    e.preventDefault();
    this.props.router.push(`/user/${this.props.post.author.author_id}`);
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
          <div className='like-count'># of likes</div>
          <h4><Link to={prof_url} className='profile-link' >{this.props.post.author.author_username}</Link></h4>
          <p> {this.props.post.description} additional comment detail that makes it wrap around #greatcoment #makethisareallylonghashtagthatwillcausethetexttogooutofboundsofmycontainertestestestestestestestestestestestest</p>
        </div>

        <form className='comment'>
          <input type='text' placeholder='Add a comment...'>

          </input>
        </form>
      </div>
    );
  }
}

export default PostItem;
