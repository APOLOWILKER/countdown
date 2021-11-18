import React, { Component } from "react";
import '../styles/BtnStyle.css';
import propTypes from 'prop-types';


export default class ButtonsTime extends Component {
  render() {
    const { value, onClick } = this.props
    return(
      <input
      className="style-btn style-times-btns"
      type="button"
      name={ value }
      value={ value }
      onClick={ onClick }
      >
      </input>
    )
  }
}

ButtonsTime.propTypes = {
  value: propTypes.string,
  onClick: propTypes.func,
}
