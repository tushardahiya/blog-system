import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import SignUp from './containers/SignUp/SignUp'
import Feed from './containers/Feed/Feed'
import FullPost from './components/FullPost/FullPost'
import Login from './components/Login/Login'
import {Switch} from 'react-router-dom'
class App extends Component{
  render(){
    return(
      <Layout>
        <Switch>
          <Route path="/" exact component={Feed} />
          <Route path = "/sign-up" component={SignUp}/>
          <Route path="/login" component={Login} />
          <Route path="/:id" exact component={FullPost} />
        </Switch>
      </Layout>
    )
  }
}
export default App