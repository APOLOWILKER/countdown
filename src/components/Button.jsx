import React, {Component} from "react";
import propTypes from 'prop-types';
import '../styles/BtnStyle.css';


class Button extends Component {
  render() { 
    const {onClick, className, text, value, name } = this.props
    return ( 
      <button
        className={className}
        type="button"
        onClick={onClick}
        value={value}
        name={name}
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: propTypes.func,
  className: propTypes.string.isRequired,
  text: propTypes.string,
  value: propTypes.string,
  name: propTypes.string,
}

export default Button;