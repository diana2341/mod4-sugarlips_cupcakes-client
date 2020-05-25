import React from 'react'
import Form from './Form'


const EditProfile = props => {
  
  const {form, handleChange} = props

  return (
    <div>
      <h1>Edit Profile</h1>
      <Form 
        form={form} 
        handleChange={handleChange}/>
    </div>
  )
}

export default EditProfile
