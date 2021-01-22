import './style.css'
import {Link} from 'react-router-dom'
import React from 'react'
import CreateCallForm from '../../components/create-call-form.js'
import { CookiesProvider } from 'react-cookie';
import logo from "../../assets/logo.svg"



class CreateCall extends React.Component{
  
/*
  static async getInitialProps(ctx) {
  
    const resp  =await this.verifySession(ctx);
  
    return resp;
  }
*/
  render(){
  return (
    <div className="container">
      <main className="main-create-call">
        <CookiesProvider>
          <CreateCallForm styleclass="loginform"/>
        </CookiesProvider>
      </main>

      <footer className="footer">
        <p>
          Powered by: 
        </p>
        <Link to='/'>
        <img src={logo} alt="Yubbe Logo" className="logo" /></Link>
      </footer>
    </div>
  )}
  
}

export default CreateCall;

