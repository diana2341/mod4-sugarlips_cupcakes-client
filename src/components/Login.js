import React, { Component } from 'react'

export default class Login extends Component {

  state = {
    username: '',
    loginUser: {}
  }

  loginUser = username => {
    fetch(`http://localhost:3000/users/${username}`)
    .then(resp => resp.json())
    .then(user => this.setState({
      loginUser: user
      })
    )
  }
  
  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event, username) => {
    event.preventDefault()
    this.loginUser(username)
  }

  render() {
    return (
      <div className="login-box">
        <h2>Login</h2>
      
        <form>
          <div className="user-box">
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            <label>Username</label>
          </div>
      
          <div className="user-box">
            <input type="password" name="password" />
            <label >Password</label>
          </div>
              
          <a 
            onClick={event => this.handleSubmit(event, this.state.username)}
            href="">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Enter
          </a>
        </form>
      </div>
    )
  }
}
