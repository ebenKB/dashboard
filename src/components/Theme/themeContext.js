import React, {createContext, useState} from 'react';

 export const ThemeContext = createContext([{theme : 'dark-theme'}]);

 export const ThemeProvider = (props) => {
   const [theme, toggleTheme] = useState({theme: 'dark'});

return (
  <ThemeContext.Provider value={[theme, toggleTheme]}>
    {props.children}
  </ThemeContext.Provider>
)
 }

