import React from 'react'
import Form from './Form'


const Signup = props => {

  return (
    <div>
      <Form
        form={props.form}
        handleFormChange={props.handleFormChange}
        handleSignupSubmit={props.handleSignupSubmit}
        history={props.history} 
      />
    </div>
  )
}

export default Signup
