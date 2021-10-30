import React, { Component } from "react";
import { IoIosArrowDropupCircle } from 'react-icons/io';

export default class AddBtn extends Component {
  render() {
    return(
      <div>
        <button className="style-btn" type="button">
          <IoIosArrowDropupCircle className="style-icon-modify-time" />
        </button>
      </div>
    )
  }
}