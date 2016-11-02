import React from 'react';
import { Link, withRouter } from 'react-router';

class PostItem extends React.Component {

  constructor(props){
    super(props);
    console.log(props);
  }


  render () {
    return (
      <div>
        <h1>{this.props.post.description}</h1>
        <h1>{this.props.post.img_url}</h1>
      </div>
    );
  }
}

export default PostItem;
