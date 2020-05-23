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
     

 <div className="con">
  <div className="card">
    <div className="about-login">
      <h1>Login</h1>
      <p>Welcome Back Friend!!</p>
 </div>
  <form autoComplete="off" onSubmit={this.handleSubmit}>
      <div className="inputs-login">
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}  placeholder="username" required/><br/>
          
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}  placeholder="Password" required/>
      </div>
    <button className="submit-login">SIGN UP</button>    
   </form>
  </div>
    {/* <h1>{this.state.username}</h1>
    <h1>{this.state.password}</h1> */}

 </div>
    )
  }
}
