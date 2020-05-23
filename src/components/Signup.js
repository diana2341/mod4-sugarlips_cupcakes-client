import React from 'react'

const Signup = props => {

  const {handleChange, handleSignupSubmit, username, password} = props

  return (
    <div>
      <h2>Sign Up</h2>

      <form>
          <div className="user-box">
            <label>Username</label>
            <input 
              onChange={handleChange}
              type="text" 
              name="username" 
              value={username} />
          </div>
      
          <div className="user-box">
            <label >Password</label>
            <input
              onChange={handleChange}
              type="password" 
              name="password"
              value={password} />
          </div>
              
          <a 
            onClick={event => {
            handleSignupSubmit(event, {username: username, password: password})
            props.history.push('/cupcakes')
              }
            }
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

export default Signup
