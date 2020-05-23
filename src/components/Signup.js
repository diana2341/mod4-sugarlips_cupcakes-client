import React from 'react'

const Signup = props => {

  return (
    <div>
      <h1>Sign Up</h1>

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

export default Signup
