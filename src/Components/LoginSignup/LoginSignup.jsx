import React from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/pass.png'

const LoginSignup = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">SignUp</div>
            <div className="underline"></div>
        </div>
      <div className="inputs">
        <div className="input">
            <img src="" alt="" />
            <input type="text" />
        </div>
        <div className="input">
            <img src="" alt="" />
            <input type="text" />
        </div>
        <div className="input">
            <img src="" alt="" />
            <input type="text" />
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
