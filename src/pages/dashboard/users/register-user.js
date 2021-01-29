import './style.css'
import React from 'react'
import SignUpForm from '../../../components/signup/signup-form.js'
import { CookiesProvider,withCookies } from 'react-cookie';


class RegisterUser extends React.Component{
  loading = (isLoading)=>{
    if(this.props.loading){
        this.props.loading(isLoading);
    }
}
  render(){
  return (
    <div className="register-user">
        <h2>Cadastrar usuário</h2>
        <CookiesProvider>
          <SignUpForm styleclass="loginform" loading={this.loading}/>
        </CookiesProvider>
    </div>
  )}
}

export default withCookies(RegisterUser);

