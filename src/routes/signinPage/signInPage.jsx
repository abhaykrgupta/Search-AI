import React from 'react'
import "./signInPage.css"
import { SignIn } from '@clerk/clerk-react'

const SignInPage = () => {
    return (
        <div className='signinPage'>
           <SignIn path="/sign-in" signUpUrl='/sign-up' forceRedirectUrl='/deshboard' />
        </div>
    )
}

export default SignInPage
