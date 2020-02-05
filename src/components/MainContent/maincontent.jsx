import React from 'react';
import {ReactComponent as Logo} from '../../svg/spanner.svg';
import {ReactComponent as UserIcon } from '../../svg/user.svg';
import { ReactComponent as Ellipses } from '../../svg/ellipses.svg';
import {ReactComponent as TaskIcon} from '../../svg/plus.svg';

import './maincontent.scss';
import DropdownExampleSimple from '../form-fields/dropdown/dropdown';

const Maincontent = () => {
  return (
    <div className="main-content__wrapper">
      <div className="header"></div>
      <div className="main-content">
        <div className="header-caption">
          <div className="content">
            <div className="company-icon">
              <span><Logo className="icon"/></span>
              <span className="big-caption">
                <h1>Skill</h1>
              </span>
            </div>
          </div>
          <div className="user inline-icons">
            <span>
              <UserIcon className="logo medium"/>
            </span>
            <span>
              <Ellipses className="logo medium"/>
            </span>
          </div>
        </div>
        <DropdownExampleSimple/>
      </div>
      <div className="footer">
        <div className="footer-content">
          <button>
            <span className="icon">
              <TaskIcon className="icon small" />
            </span>
            <span>Add a Task</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Maincontent

