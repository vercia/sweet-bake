import React from 'react';
import Nav from './components/Nav'
import Home from './components/Home';
import Menu from './components/Menu'
import Services from './components/Services';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Home />
      <Menu />
      <Services />
    </div>
  );
}

export default App;
