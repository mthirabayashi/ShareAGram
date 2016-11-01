import React from 'react';
import GreetingContainer from './greeting_container';
import Footer from './footer';
import Header from './header';

const App = ({ children, route }) => {

  // <GreetingContainer />
  return (
    <div className='app'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default App;
