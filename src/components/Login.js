import React from 'react'

const Login = props => {

  const {handleLoginChange, handleLoginSubmit, username} = props

  return (
    <div className="login-box">
      <h2>Login</h2>
    
      <form>
        <div className="user-box">
          <label>Username</label>
          <input 
            onChange={handleLoginChange}
            type="text" 
            name="username" 
            value={username} />
        </div>
    
        <div className="user-box">
          <label>Password</label>
          <input 
            type="password" 
            name="password" />
        </div>
            
        <a 
          onClick={event => handleLoginSubmit(event, username)}
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

export default Login
