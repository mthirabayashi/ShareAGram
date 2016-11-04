import React from 'react';
import { Link, withRouter } from 'react-router';

class PostItem extends React.Component {

  constructor(props){
    super(props);
    // console.log(props);
  }


  render () {
    return (
      <div className='post-item' >
        <div className='poster-pic-name'>
          <img src='http://fc07.deviantart.net/fs38/f/2008/344/c/5/Punk_Band_Rubber_Duck_by_Oriana_X_Myst.jpg' alt='posters profile pic' className='profile-pic-thumbnail'/>
          <p>{this.props.post.author.author_username}</p>
        </div>
        <div className='post-item-photo'>
          <img src={this.props.post.img_url} alt='IMAGE NO HERE'/>
        </div>
        <div className='post-description'>
          <div className='like-count'># of likes</div>
          <h4> {this.props.post.author.author_username} </h4>
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
