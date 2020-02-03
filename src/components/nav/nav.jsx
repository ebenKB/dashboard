import React, { useContext } from 'react';
import SearchInput from '../form-fields/search-input/search-input';
import NavItem from '../nav-item/nav-item';
import './nav.scss';
import ThemedButton from '../ThemeButton/theme-button';


const Nav = ({...rest}) => {

  return (
    <div className="nav-content">
      <ThemedButton onClick = {rest.onClick } darktheme ={rest.darkTheme}>
      </ThemedButton>
      <SearchInput/>
      <div className="nav-content__highlight">
        <ul>
          <li>
            <NavItem 
              type="sun"
              title="My Day"
              caption=""
            />
          </li>
          <li>
            <NavItem 
              type="star"
              title="Important"
              caption="25"
            />
          </li>
          <li>
            <NavItem 
              type="checklist"
              title="Planned"
              caption="4"
            />
          </li>
          <li>
            <NavItem 
              type="flag"
              title="Flagged Email"
              caption="3"
            />
          </li>
          <li>
            <NavItem 
              type="task"
              title="Tasks"
              caption="458"
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
