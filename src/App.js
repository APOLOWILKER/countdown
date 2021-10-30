import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Countdown from './Pages/Countdown';



export default class App extends Component {
  render() {
    return(
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/countdown"  component={Countdown} />
      </Switch>
      </BrowserRouter>
    )
  }
}

