import React, { Component } from "react";
import Header from "../components/Header";
import "../styles/Countdown.css"
import { FaPlay, FaPause, FaClock } from 'react-icons/fa';
import { Link } from "react-router-dom";
import AddBtn from "../components/AddBtn";
import MinBtn from "../components/MinBtn";

export default class Countdown extends Component {
  render() {
    return(
      <div>
        <Header />
        <Link to="/">
          <FaClock className="icon-style" />
        </Link>

        <div className="timer-container">
          <div className="dislplay-countdown">
          <h3>{`00 : 00`}</h3>
          </div>

          <hr className="line" />
          
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