import React from 'react'
import CupcakeContainer from './CupcakeContainer'


class HomePage extends React.Component {
    state={
        username:'',
        password:''
    }
handleChange=(event)=>{
    const{name,value}=event.target
    this.setState({[name]:value})
}
 
    render() {
        console.log(this.state.username)
        console.log(this.state.password)
      return( 
        <div>
        <h1>Make yourself at home with gourmet cupcake.</h1>
{/* make login component */}
    <div className="login-box">
	<h2>Login</h2>

	<form >
		<div className="user-box">
			<input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
			<label>Username</label>
		</div>

		<div className="user-box">
			<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
			<label >Password</label>
		</div>
        
		<a href="">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			Enter
		</a>
	</form>
    </div>
      <CupcakeContainer/>
        </div>
      )
    }
  }
export default HomePage