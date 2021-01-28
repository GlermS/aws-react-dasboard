import './style.css'
import LoginForm from './login-form.js'
import Footer from '../../components/footer';
import LoadingScreen from '../../components/loadingScreen'

import React from 'react'


class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading:false
    }
  } 

  loading = (isLoading)=>{
    this.setState({isLoading})
  }

  displayLoading = ()=>{
    if(this.state.isLoading){
      return 'flex'
    }else{
      return 'none'
    }
  }

  render(){

  return (
    <div className="container" id="login-page">
      <main className="main-login">
        <LoginForm styleclass="loginform" loading={this.loading}/>
      </main>

      <Footer />
      <LoadingScreen display={this.displayLoading()}/>
    </div>
  )}
  
}

export default Login;

