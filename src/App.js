import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Layout from './containers/Layout/Layout'
import SignUp from './containers/SignUp/SignUp'
class App extends Component{
  render(){
    return(
      <Layout>
        <Route path="/" exact render = {
          () => {
            return <h1>This is the home page</h1>
          }
        }/>
        <Route path = "/sign-up" component={SignUp}/>
      </Layout>
    )
  }
}
export default App;