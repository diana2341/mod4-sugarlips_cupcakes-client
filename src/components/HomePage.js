import React from 'react'


class HomePage extends React.Component {

  handClick=()=>{
    this.props.history.push('/cupcakes') 
  }

  render() { 
    return( 
      <div>
        <h1>Make yourself at home with gourmet cupcake</h1>
        <button onClick={this.handClick}>enter</button>
        
      </div>
    )
  }
}

export default HomePage
