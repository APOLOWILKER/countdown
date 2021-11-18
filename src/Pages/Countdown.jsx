import React, { Component } from "react";
import Header from "../components/Header";
import "../styles/Countdown.css"
import { FaPlay, FaPause, FaClock } from 'react-icons/fa';
import { Link } from "react-router-dom";
import AddBtn from "../components/AddBtn";
import MinBtn from "../components/MinBtn";
import PropTypes from 'prop-types';

export default class Countdown extends Component {
  
  render() {
    const { minutes, seconds } = this.props.location.state
    return(
      <div>
        <Header />
        <Link to="/">
          <FaClock className="icon-style" />
        </Link>
        <div className="timer-container">
          <div className="dislplay-countdown">
            {/* <Timer /> */}
          <h3>{`${minutes} : ${seconds}`}</h3>
          </div>

          <hr className="line" /> 
          {/* transformar ele em progress Bar */}
          
          <div className="container-btns">
          <button type="button" className="btn-style btn-play">
            <FaPlay className="icon-style"/>
          </button>
          <button type="button" className="btn-style btn-stop">
            <FaPause className="icon-style" />
          </button>
          </div>
        </div>

        <div className="container-buttons-count">
        <AddBtn />
        <MinBtn />
        </div>        
      </div>
    )
  }
}

Countdown.propTypes = {
  location:PropTypes.string.isRequired,
  minutes: PropTypes.string.isRequired,
  seconds: PropTypes.string.isRequired,
}
