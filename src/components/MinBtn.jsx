import React, { Component } from "react";
import propTypes from 'prop-types';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

export default class MinBtn extends Component {
  render() {
    const { onClick } = this.props;
    return(
      <div>
        <button className="style-btn" type="button" onClick={onClick}>
          <IoIosArrowDropdownCircle className="style-icon-modify-time" />
        </button>
      </div>
    )
  }
}

MinBtn.propTypes = {
  onClick: propTypes.func.isRequired
}