import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage'
import Profile from './components/Profile'
import Signup from './components/Signup'
import EditProfile from './components/EditProfile'
import CupcakeContainer from './components/CupcakeContainer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route 
            path="/" 
            render={(routerProps) => 
            <HomePage {...routerProps}/>}
            />
          <Route 
            path="/profile" 
            render={(routerProps) => <Profile />} 
            />
          <Route 
            path="/sign-up" 
            render={(routerProps) => <Signup />} 
            />
          <Route 
            path="/edit-profile" 
            render={(routerProps) => <EditProfile />} 
            />
          <Route 
            path="/cupcakes" 
            render={() => <CupcakeContainer />}
            />
        </Switch>
      </div>
    )
  }
}

export default App;
