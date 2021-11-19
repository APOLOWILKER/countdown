import React, { Component } from "react";
import propTypes from 'prop-types';
import { IoIosArrowDropupCircle } from 'react-icons/io';

export default class AddBtn extends Component {
  render() {
    const { onClick } = this.props;
    return(
      <div>
        <button className="style-btn" type="button" onClick={onClick}>
          <IoIosArrowDropupCircle className="style-icon-modify-time" />
        </button>
      </div>
    )
  }
}

AddBtn.propTypes = {
  onClick: propTypes.func.isRequired
}
