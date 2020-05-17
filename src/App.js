import React from 'react';
import Nav from './components/Nav'
import Home from './components/Home';
import Menu from './components/Menu'
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Home />
      <Menu />
      <Services />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
