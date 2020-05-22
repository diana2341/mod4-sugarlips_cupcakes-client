import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage'
import Profile from './components/Profile'
import Form from './components/Form'
import Signup from './components/Signup'
import EditProfile from './components/EditProfile'
import CupcakeContainer from './components/CupcakeContainer'
import Navbar from './components/Navbar'
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import MainContainer from './components/MainContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
     <Navbar/>
        <Switch>
    <Route path="/home" render={(routerProps) =><HomePage {...routerProps}/>}/>
    <Route path="/profile" render={(routerProps) => <Profile 
            currentUser={this.state.currentUser} />}/>
    <Route path="/sign-up" render={(routerProps) =><Signup 
            form={this.state.form}
            handleChange={this.handleChange} />}/>
    <Route path="/edit-profile" render={(routerProps) =><EditProfile 
            form={this.state.form}
            handleChange={this.handleChange} />}/>
    <Route path="/form" render={(routerProps) =>< Form 
            form={this.state.form}
            handleChange={this.handleChange} />}/>
            {/* form for? */}
    <Route path="/cupcakes" render={()=><CupcakeContainer/>}/>
       
          </Switch>
        <MainContainer />
      </div>
    )
  }
}

export default App;
  