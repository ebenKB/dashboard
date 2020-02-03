import React,{useState} from 'react';
import './dropdown.scss';
import {ReactComponent as StarIcon} from '../../../svg/star.svg';
import {ReactComponent as ArrowDown} from '../../../svg/chevron-arrow-down.svg';
import { ReactComponent as Close } from '../../../svg/close.svg';

const DropdownExampleSimple = () => {
  const [canShowOptions, showOptions] = useState(true); 

  const toggleShowOption =() => {
    showOptions(!canShowOptions);
  }

  return (
    <div className="dropdown">
      <div className="cta">
        <button
          onClick ={toggleShowOption}
        >Sorted by Importance
          <ArrowDown className="small logo"/>
        </button>
        <div className="icon-wrapper">
          <Close className="logo small"/>
        </div>
      </div>

      {
        canShowOptions && (
          <div className="custom-dropdown">
            <form>
              <div className="item">
                <div className="content">
                  <input type="radio" id="test1" name="radio-group" />
                  <label htmlFor="test1">Css mastery</label>
                </div>
                <div className="label">
                  <StarIcon/>
                </div>
              </div>
           
            <div className="item">
              <div className="content">
                <input type="radio" id="test2" name="radio-group" /> 
                <label htmlFor="test2">Have portfolio</label>
              </div>
              <div className="label">
                <StarIcon/>
              </div>
            </div>
            <div className="item">
              <div className="content">
                <input type="radio" id="test3" name="radio-group" />
                <label htmlFor="test3">I css challenge daily</label>
              </div>
              <div className="label">
                <StarIcon/>
              </div>
            </div>
            </form>
          </div>
        )
      }
    </div>
  ) 
}

export default DropdownExampleSimple

