import React from 'react'
// import CupcakeContainer from './CupcakeContainer'
// import { Route, Switch  } from 'react-router-dom';




class HomePage extends React.Component {
    state={
        username:'',
        password:''
    }
handleChange=(event)=>{
    const{name,value}=event.target
    this.setState({[name]:value})
}
handleSubmit=(event)=>{
    event.preventDefault()

    this.props.history.push('/cupcakes') 
}
    render() {
        console.log(this.state.username)
        console.log(this.state.password)
      return( 
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
        <a ><h1>Make yourself at home with gourmet cupcake.</h1></a>
{/* make login component */}
    <div className="login-box">
	<h2>Login</h2>

    <form onSubmit={this.handleSubmit}>
    <div className="user-box">
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="username"/>
    </div>
       
    <div className="user-box">
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password" />
    </div>
        
        <input type="submit" value="Login"/>

</form>
    </div>
{/* <Switch>
    <Route path="/cupcakes" render={<CupcakeContainer/>}/>
</Switch> */}
        </div>
      )
    }
  }
export default HomePage