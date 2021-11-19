import React, { Component } from "react";
import propTypes from 'prop-types';


export default class InputTimes extends Component {
  render() {
    const { value, onChange, name, id} = this.props;
    return(
      <>
      <label htmlFor={id}>
      <input
        className="timer-inputs"
        min='00'
        max='59'
        type="number"
        name={name}
        id={id}
        placeholder="00"
        value={ value } // name que vou passar para o handleChange
        onChange={ onChange }
      />
      <strong className="text-labels"><em>{id}</em></strong>
    </label>
    </>
    )
  }
}

InputTimes.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.string.isRequired,
  id: propTypes.string,
  name: propTypes.string,
};
