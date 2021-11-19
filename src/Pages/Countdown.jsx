import React, { Component } from "react";
import Header from "../components/Header";
import "../styles/Countdown.css"
import { FaPlay, FaPause, FaClock } from 'react-icons/fa';
import { Link } from "react-router-dom";
// import AddBtn from "../components/AddBtn";
// import MinBtn from "../components/MinBtn";
import PropTypes from 'prop-types';
import Button from "../components/Button";

export default class Countdown extends Component {
  constructor() {
    super();
    // const { minutes, seconds } = this.props.location.state 
    // elas são props??
    this.state = {
      minutes: 0,
      seconds: 0,
      isButtonDisabled: false,
    }, // aqui transformo em state.
    this.decrementCountdown = this.decrementCountdown.bind(this);
    this.convertTime = this.convertTime.bind(this);
    this.stopTime = this.stopTime.bind(this);
    this.addOneMinute = this.addOneMinute.bind(this);
    this.rmvOneMinute = this.rmvOneMinute.bind(this);
  }
  
  componentDidMount() {
    const { minutes, seconds } = this.props.location.state;
    this.setState({
      minutes: minutes.padStart(2, '0'),
      seconds: seconds.padStart(2, '0'),
      });
  }
  
  // função que converte a prop do cowntdown  seg
  convertTime() {
    const { minutes, seconds } = this.state 
    let totalSeconds = Number(minutes) * 60 + Number(seconds) 
    return totalSeconds
  }

  decrementCountdown() {
    this.setState({
      isButtonDisabled: true,
    })
    this.decrementTime = setInterval(() => {
    let totalSeconds = this.convertTime();
    console.log(totalSeconds);
    totalSeconds -= 1
    this.setState({
      minutes: String(Math.floor(totalSeconds / 60)).padStart(2, '0'),
      seconds: String((totalSeconds % 60)).padStart(2, '0'),
    })
    if(totalSeconds === 0) {
      clearInterval(this.decrementTime);
    }
      }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.decrementTime);
  }

  stopTime() {
    clearInterval(this.decrementTime);
    this.setState({
      isButtonDisabled: false,
    })
  }

  addOneMinute() {
    const {minutes} = this.state
    const minutAdd = Number(minutes) +1;
    this.setState({
      minutes: String(minutAdd).padStart(2, '0')
    });
  }

  rmvOneMinute() {
    const {minutes} = this.state
    const minutMin = Number(minutes) -1;
    this.setState({
      minutes: String(minutMin < 0 ? 0 : minutMin).padStart(2, '0')
    });
  }
  
  render() {
    const {minutes, seconds, isButtonDisabled} = this.state
    return(
      <div>
        <Header />
        <Link to="/">
          <FaClock className="icon-style-return" />
        </Link>
        <div className="timer-container">
          <div className="dislplay-countdown">
          <h3>{`${minutes}:${seconds}`}</h3>
          </div>

          <hr className="line" /> 
          {/* transformar ele em progress Bar */}
          
          <div className="container-btns">
          <button 
            disabled={isButtonDisabled}
            type="button"
            className="btn-style btn-play"
            onClick={this.decrementCountdown}
          >
            <FaPlay className="icon-style"/>
          </button>
          
          <button 
            type="button"
            className="btn-style btn-stop"
            onClick={this.stopTime}
            >
            <FaPause className="icon-style" />
          </button>
          </div>
        </div>

        <div className="container-buttons-count">
        <Button
          className="style-btn"
          onClick={this.addOneMinute}
          text="+1"
        />
        <Button
          className="style-btn"
          onClick={this.rmvOneMinute}
          text="-1"
        />
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
