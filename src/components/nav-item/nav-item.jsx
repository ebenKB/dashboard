import React from 'react';
import './nav-item.scss';
import {ReactComponent as Sun} from '../../svg/sun.svg';
import {ReactComponent as Star} from '../../svg/star.svg';
import {ReactComponent as Checklist} from '../../svg/list.svg';
import {ReactComponent as Flag} from '../../svg/flags.svg';
import {ReactComponent as Planner} from '../../svg/planner.svg';

const NavItem = ({type, title, caption}) => {
  const getIcon = () => {
    if(type === 'sun') {
      return (
        <Sun className="primary"/>
      )
    } else if(type === "star") {
       return (
        <Star className="primary"/>
      )
    } else if(type=== "checklist"){
      return (
        <Checklist className="success"/>
      )
    } else if (type === 'flag') {
      return (
        <Flag className="danger"/>
      )
    } else if(type === 'task'){
      return (
        <Planner className="primary"/>
      )
    }
  }
  return (
    <div className="nav-item clickable">
      <span className="icon">
        {getIcon()}
      </span>
      <div className="content">
        <span className="title">{title}</span>
        <span className="caption">{caption}</span>
      </div>
    </div>
  )
}

export default NavItem
