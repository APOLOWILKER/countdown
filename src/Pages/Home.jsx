import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SaveBtn from '../components/SaveBtn';
import StartBtn from '../components/StartBtn';
import "../styles/Home.css"


export default class Init extends Component {
  // formtTime(time) {
  //   const minutes = Math.floor(time/60);
  //   let seconds - time % 60;
  //   if(seconds < 10) {
  //     seconds - `0 ${seconds}`
  //   }

  //   return `${minutes} : ${seconds}`
  // }

  render() {
    return(
      <div>
        <Header />
        <h2 className="text-home">SET TIME</h2>
        <div className="container-times">
        <label htmlFor="MINUTES">
          <input
            className="timer-inputs"
            type="number"
            id="MINUTES"
            placeholder="00"
          />
          <strong className="text-labels"><i>MINUTES</i></strong>
        </label>
        <label htmlFor="SECONDS">
          <input
            className="timer-inputs"
            type="number"
            id="SECONDS"
            placeholder="00"
          />
          <strong className="text-labels"><i>SECONDS</i></strong>
        </label>
        </div>
        <div className="container-buttons">
        <Link to="/countdown">
          <StartBtn />
        </Link>
        <SaveBtn />
        </div>
      </div>
    )
  }
}