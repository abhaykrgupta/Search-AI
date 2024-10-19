import React from 'react'
import "./signUppage.css"
import { SignUp } from '@clerk/clerk-react'

const SignUpPage = () => {
    return (
        <div className='signupPage'>
            <SignUp path="/sign-up" />
        </div>
    )
}

export default SignUpPage
