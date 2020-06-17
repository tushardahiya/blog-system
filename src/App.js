import React, { Component, Fragment } from 'react';
import './App.css';
import Login from './Components/Login/Login';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          Nav-Bar: (Login,Sign-Up)/(Feed),Logo
          Main Area
          Info Cards
      </div>
        <Login />
      </Fragment>
    )
  }
}
export default App;