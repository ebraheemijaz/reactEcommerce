import React from 'react'

import SignIn from '../../component/SignIn/SignIn'
import SignUp from '../../component/SignUp/SignUp'

import './sign-in-and-sign-up.scss'

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUpPage
