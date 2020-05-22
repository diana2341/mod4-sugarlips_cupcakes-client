import React from 'react'
import Form from './Form'

const Signup = props => {
  
  const {form, handleChange} = props

  return (
    <div>
      <h1>Sign Up</h1>
      <Form 
        form={form} 
        handleChange={handleChange}/>
    </div>
  )
}

export default Signup
