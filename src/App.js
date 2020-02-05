import React, { useState } from 'react';
import './App.scss';
import Nav from './components/nav/nav';
import Menu from './components/menu/menu';
import Maincontent from './components/MainContent/maincontent';

const App = () => {
  const [darkTheme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!darkTheme);
  }

  return (
    <div className={`App ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="nav">
        <div className="nav-wrapper">
          <Nav 
            onClick={toggleTheme}
            darkTheme={darkTheme}
          />
          <Menu classes="menu-wrapper"/>
        </div>
      </div>
      <Maincontent/>
    </div>
  ); 
}

export default App;
