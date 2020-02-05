import React from 'react';
import './theme-button.scss';

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    return (
      <button
        onClick={props.onClick}
        className="theme cta clickable"
      >
        {
          props.darktheme && (
            <span>Toggle Light Mode</span>
          )
        }
        {
          !props.darktheme && (
            <span>Toggle Dark Mode</span>
          )
        }
      </button>
    );
  }
}

export default ThemedButton;