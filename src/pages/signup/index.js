import './style.css'
import React from 'react'
import SignUpForm from '../../components/signup/signup-form.js'
import { CookiesProvider } from 'react-cookie';
import Footer from '../../components/footer';
import LoadingScreen from '../../components/loadingScreen'



class Signup extends React.Component{
constructor(props){
  super(props)
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
    <div className="container">
      <main className="main-signup">
        <CookiesProvider>
          <SignUpForm styleclass="loginform"/>
        </CookiesProvider>
      </main>

      <Footer />
      <LoadingScreen display={this.displayLoading()}/>
    </div>
  )}
  
}

export default Signup;

