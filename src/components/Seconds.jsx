import React, { Component } from "react";
import propTypes from 'prop-types';


export default class SecondsTime extends Component {
  render() {
    const { seconds, onChange } = this.props;
    return(
    <div>
    <label htmlFor="SECONDS">
          <input
            className="timer-inputs"
            min='0'
            max='59'
            type="number"
            id="SECONDS"
            name="valueS" // tem o mesmo nome do state
            value={ seconds }
            placeholder="00"
            onChange={ onChange }
          />
          <strong className="text-labels"><em>SECONDS</em></strong>
        </label>
    </div>
    )
  }
}

SecondsTime.propTypes = {
  seconds: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
}
