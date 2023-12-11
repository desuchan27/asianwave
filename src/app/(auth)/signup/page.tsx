
import SignUpForm from '@/components/form/SignUpForm'
import Navbar from '@/app/components/navbar'
import React from 'react'

const signup = () => {
  return (
    <div className="bg-custom-light-purple min-h-screen">
      <Navbar />
      <SignUpForm/>
    </div>
  )
}

export default signup