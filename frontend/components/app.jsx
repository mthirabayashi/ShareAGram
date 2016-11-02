import React from 'react';
import GreetingContainer from './greeting_container';
import Footer from './footer';
import HeaderContainer from './header/header_container';

const App = ({ children, route }) => {

  // <GreetingContainer />
  return (
    <div className='app'>
      <HeaderContainer />
      {children}
      <Footer />
    </div>
  );
};

export default App;
