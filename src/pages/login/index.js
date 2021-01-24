import './style.css'
import LoginForm from '../../components/login-form.js'
import Footer from '../../components/footer';

import React from 'react'


class Login extends React.Component{
  render(){
  return (
    <div className="container">
      <main className="main-login">
        <LoginForm styleclass="loginform"/>
      </main>

      <Footer />
    </div>
  )}
  
}

export default Login;

