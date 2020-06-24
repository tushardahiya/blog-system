import React, { Component, Fragment } from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import SignUp from './containers/SignUp/SignUp'
import Feed from './containers/Feed/Feed'
import FullPost from './components/FullPost/FullPost'
import {Switch} from 'react-router-dom'
class App extends Component{
  render(){
    return(
      <Layout>
        <Switch>
          <Route path = "/sign-up" component={SignUp}/>
          <Route path="/" exact component={Feed} />
          <Route path="/:id" exact component={FullPost} />
        </Switch>
      </Layout>
export default App;