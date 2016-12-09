import React from 'react';

const Footer = () => {

  return(
    <ul className='footer'>
  		<li className='footer-item'>
        <section>
          <a href="https://github.com/mthirabayashi" target='_blank'><img src='https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-256.png' alt='Github'/></a>
          <p>Github</p>
        </section>
  		</li>
  		<li className='footer-item'>
        <section>
          <a href="https://www.linkedin.com/in/michaelhirabayashi
            " target='_blank'><img src='https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/linkedin-512.png' alt='LinkedIn'/>
          </a>
          <p>LinkedIn</p>
        </section>
  		</li>
  		<li className='footer-item'>
        <section>
          <a href="https://angel.co/michael-hirabayashi" target='_blank'><img src='https://cdn0.iconfinder.com/data/icons/picons-social/57/69-angellist-128.png' alt='Angellist'/>
          </a>
          <p>Angel</p>
        </section>
  		</li>
    </ul>
  );
};


export default Footer;
