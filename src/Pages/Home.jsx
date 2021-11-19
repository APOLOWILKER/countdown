import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
// import SecondsTime from '../components/Seconds';
// import StartBtn from '../components/StartBtn';
import InputTimes from '../components/InputTimes';
import "../styles/Home.css"
// import ButtonsTime from '../components/ButtonsTime';
import Button from '../components/Button';


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
          <InputTimes value={ valueM } name="valueM" id="MINUTES" onChange={ this.handleChange }  />
          <InputTimes value={ valueS } name="valueS" id="SECONDS" onChange={ this.handleChange } />
        </div>
        <div className="container-time-btns">
        <Button className="style-btn style-times-btns" value={ timeFive } text="05" name="valueM" onClick={ this.handleChange } />
        <Button className="style-btn style-times-btns" value={ timeSeven } text="07" name="valueM" onClick={ this.handleChange } />
        <Button className="style-btn style-times-btns" value={ timeTen } text="10" name="valueM" onClick={ this.handleChange } />
        <Button className="style-btn style-times-btns" value={ timeFifteen } text="15" name="valueM" onClick={ this.handleChange } />
        </div>
        <div className="container-buttons">
        <Link to={{
          pathname: "/countdown",
          state: {
            minutes: valueM,
            seconds: valueS
          }
        }}>
          <Button
          className="style-btn"
          text="NEXT"
          />
        </Link>
        </div>
      </div>
    )
  }
}
