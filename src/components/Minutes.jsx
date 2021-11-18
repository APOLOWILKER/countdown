import React, { Component } from "react";
import propTypes from 'prop-types';


export default class MinutesTime extends Component {
  render() {
    const { minutes, onChange, onClick } = this.props;
    return(
      <>
      <label htmlFor="MINUTES">
      <input
        className="timer-inputs"
        type="number"
        name="valueM"
        id="MINUTES"
        placeholder="00"
        value={ minutes } // name que vou passar para o handleChange
        onChange={ onChange }
        onClick={ onClick }
      />
      <strong className="text-labels"><em>MINUTES</em></strong>
    </label>
    </>
    )
  }
}

MinutesTime.propTypes = {
  minutes: propTypes.string.isRequired,
  onChange: propTypes.string.isRequired,
  onClick: propTypes.string.isRequired,
};
