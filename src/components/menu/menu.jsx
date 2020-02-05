import React, {useState} from 'react';
import './menu.scss';
import {ReactComponent as Plus} from '../../svg/plus.svg';
import {ReactComponent as PlusAlt} from '../../svg/plus-alt.svg';
import MenuItem from '../menu-item/menu-item';


const Menu = ({...rest}) => {
  const [menus, setMenus] = useState([
    {
      content: 'Zephaniah Bible Questions'
    },
    {
      content: 'Acts Bible Questions'
    },
    {
      content: 'Zechariah Bible Questions'
    },
    {
      content: 'Romans Bible Questions'
    },
    {
      content: 'Philippians Bible Questions'
    },
    {
      content: 'Micah Bible Questions'
    },
    {
      content: 'Malachi Bible Questions'
    },
    {
      content: 'Luke Bible Questions'
    },
    {
      content: 'John Bible Questions'
    },
    {
      content: 'John Bible Questions'
    },
    {
      content: 'Habakkuk Bible Questions'
    },
    {
      content: 'Galatians Bible Questions'
    },
    {
      content: 'Ephesians Bible Questions'
    },
    {
      content: 'Colosians Bible Questions'
    },
    {
      content: 'Amos Bible Questions'
    },
    {
      content: '2 Corinthians Bible Questions'
    },
    {
      content: '1 Timothy Bible Questions'
    }
  ]);
  
  return (
    <div className={`menu ${rest.classes}`}>
      {
        menus.map((d, idx) => {
          return <div key={idx}>
            <MenuItem
              content={d.content}
            />
          </div>
        })
      }
      <div className="clickable footNote">
        <div className="cta-content">
          <div><Plus className="icon small"/></div>
          <div>New List</div>
        </div>
        <div><PlusAlt className="icon small"/></div>
      </div>
    </div>
  )
}

export default Menu
