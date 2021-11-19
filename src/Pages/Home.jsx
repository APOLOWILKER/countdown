import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SecondsTime from '../components/Seconds';
import StartBtn from '../components/StartBtn';
import MinutesTime from '../components/Minutes';
import "../styles/Home.css"
import ButtonsTime from '../components/ButtonsTime';


export default class Init extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueM: '00',
      valueS: '00',
      timerBtns: {
        timeFive: '05',
        timeSeven: '07',
        timeTen: '10',
        timeFifteen: '15'
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange({ target }) {
    const { name } = target; // pego o nome do alvo 
    const value = target.value; // pego o valor do input alvo
  this.setState({ [ name ]: value }); // altera a chave ValueM que é passada como props para o componente minutes.
  }

  // handleClick()

  render() {
    const { valueM, valueS, timerBtns } = this.state;
    const {  timeFive, timeSeven, timeTen, timeFifteen } = timerBtns;
    return(
      <div>
        <Header />
        <h2 className="text-home">SET TIME</h2>
        <div className="container-times">
          <MinutesTime minutes={ valueM } onChange={ this.handleChange } onClick={ this.handleChange } />
          <SecondsTime seconds={ valueS } onChange={ this.handleChange } />
        </div>
        <div className="container-time-btns">
        <ButtonsTime value={ timeFive } onClick={ this.handleChange } />
        <ButtonsTime value={ timeSeven }  onClick={ this.handleChange } />
        <ButtonsTime value={ timeTen }  onClick={ this.handleChange } />
        <ButtonsTime value={ timeFifteen }  onClick={ this.handleChange } />
        </div>
        <div className="container-buttons">
        <Link to={{
          pathname: "/countdown",
          state: {
            minutes: valueM,
            seconds: valueS
          }
        }}>
          <StartBtn />
        </Link>
        </div>
      </div>
    )
  }
}
