import React, {useState, useContext} from 'react';
import {ThemeContext} from './themeContext';

const ThemeState = (props) => {
  const [theme, toggleTheme] = useContext({
    theme: 'dark'
  })

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeState;
