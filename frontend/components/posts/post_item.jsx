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
          <img alt='posters profile pic'/> authors username
        </div>
        <div className='post-item-photo'>
          <img src={this.props.post.img_url} />
        </div>
        <div className='post-description'>
          <div className='like-count'># of likes</div>
          <h4> authors username </h4>
          <p> {this.props.post.description} additional comment detail that makes it wrap around</p>
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
