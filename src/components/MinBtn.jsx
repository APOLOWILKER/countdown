import React, { Component } from "react";
import { IoIosArrowDropdownCircle } from 'react-icons/io';

export default class MinBtn extends Component {
  render() {
    return(
      <div>
        <button className="style-btn" type="button">
          <IoIosArrowDropdownCircle className="style-icon-modify-time" />
        </button>
      </div>
    )
  }
}