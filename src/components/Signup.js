

import React from 'react'
import Form from './Form'

const Signup = props => {

  return (
    <div>
      <Form
        form={props.form}
        handleFormChange={props.handleFormChange}
        username={props.username}
        password={props.password}
        handleSignupSubmit={props.handleSignupSubmit} 
      />
    </div>
  )
}

export default Signup
