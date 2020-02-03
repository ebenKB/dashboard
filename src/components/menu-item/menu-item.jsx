import React from 'react';
import {ReactComponent as Icon} from '../../svg/menu.svg';

import './menu-item.scss';

const MenuItem = ({content}) => {
  const trimContent =(content) => {
    const newContent = content;
    const contentArray = newContent.replace(' ', '*').split('');
    
    let trimmedContent = "";
    let counter =0;
    while(counter !== contentArray.length && counter < 21) {
      trimmedContent = `${trimmedContent}${contentArray[counter]}`;
      counter++;
    }

    // check if there are more characters left
    if(counter < contentArray.length) {
      trimmedContent=`${trimmedContent}...`;
    }

    return trimmedContent.replace('*', ' ');
  }
  return (
    <div className="menu-item">
      <div className="icon">
        <Icon className="primary"/>
      </div>
      <div className="content">{trimContent(content)}</div>
    </div>
  )
}

export default MenuItem
