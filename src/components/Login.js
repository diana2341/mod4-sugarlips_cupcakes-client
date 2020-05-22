import React, { Component } from 'react'

export default class Login extends Component {

  state = {
    username:'',
    password:''
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log('logged in!')
    this.props.history.push('/cupcakes') 
  }

  render() {
    console.log(this.state.username)
    console.log(this.state.password)

    return (
      <div className="login-box" onSubmit={this.handleSubmit}>
        <h2>Login</h2>
      
        <form>
          <div className="user-box">
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            <label>Username</label>
          </div>
      
          <div className="user-box">
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
            <label >Password</label>
          </div>
              
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
