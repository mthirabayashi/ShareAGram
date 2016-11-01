import React from 'react';
import { withRouter } from 'react-router';

const Footer = ({ router }) => {
  const handleClick = url => () => router.push(url);

  return(
    <ul className='footer'>
  		<li className='footer-item' onClick={handleClick(`https://github.com/mthirabayashi`)}>
        <a href="https://github.com/mthirabayashi">Careers<img src='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png' alt='Github'/></a>
  		</li>
  		<li className='footer-item' onClick={handleClick(`https://github.com/mthirabayashi`)}>
        <a href="https://github.com/mthirabayashi">Footer2<img src='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png' alt='Github'/></a>
  		</li>
  		<li className='footer-item' onClick={handleClick(`https://github.com/mthirabayashi`)}>
        <a href="https://github.com/mthirabayashi">Footer3<img src='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png' alt='Github'/></a>
  		</li>
    </ul>
  );
};


export default withRouter(Footer);
