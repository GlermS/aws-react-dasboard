import './style.css'
import { withCookies} from 'react-cookie';
import {verifySession} from '../components/session-verifier'
import LoadingScreen from '../components/loadingScreen'
import Dashboard from './dashboard'
import Footer from '../components/footer';
import {Redirect} from 'react-router-dom'
import React from 'react'
import SideMenu from '../components/sideMenu';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

class Home extends React.Component{
  constructor(props){
    super(props)
    // const { cookies } = props;
    var session = true
 

    this.state = {
      session: session,
      // name: cookies.get('name') ||'',
      name:'',
      auth: 'adm',
      isLoading: false,
      area:''
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
  
  // logoutFunc = async ()=>{
    
  //   const { cookies } = this.props;

  //   cookies.set('authToken','',{path:'/'})
  //   this.setState({session:false})
  // }

  componentDidMount = async()=>{
    // const { cookies } = this.props;

    // const respo = await verifySession(cookies.cookies);
    // if(respo.approved){
    //   if(!this.state.session){
    //     this.setState({session: true})
    //   }
    //   //cookies.set('authToken','',{path:'/'})
    //   if(respo.data.name){
    //     this.setState({name:respo.data.name})
    //   }
    //   if(respo.data.authorization){
    //     this.setState({auth:respo.data.authorization})
    //   }
    // }else{
    //   if(this.state.session){
    //     this.setState({session: false})
    //   }
    // }
  }


  redirect = ()=>{
    if(this.state.session){
      return []
    }else{
      return <Redirect to="/login"/>
    }
  }

  updateArea =(area)=>{
    
    this.setState({area})
  }
  options = {
    'client':[
      {path:'/mycalls', text:'Minhas Calls'},
      {path:'/available-calls', text:'Calls Disponíveis'}
  ],
    'moderator':[
      {path:'/mycalls', text:'Minhas Calls'},
      {path:'/available-calls', text:'Calls Disponíveis'}
  ],
    'adm':[
      {path:'/mycalls', text:'Minhas Calls'},
      {path:'/available-calls', text:'Calls Disponíveis'},
      {path:'/create-call', text:'Criar Call'},
      {path:'/register-user', text:'Cadastrar Usuário'},
      {path:'/users-list', text:'Lista de Usuários'},
      {path:'/create-theme', text:'Criar Tema'},
      {path:'/list-themes', text:'Lista de Temas'},      
  ],
  }

  render(){
  return (
    
    <div className="container" id="home">
      {this.redirect()}
     
      <SideMenu update={this.updateArea} username={this.state.name} options ={this.options[this.state.auth]}></SideMenu>
      {/* logout={this.logoutFunc} */}
      <div className='content'>
          <Dashboard area={this.state.area} auth = {this.state.auth} username ={this.state.name} loading={this.loading}/>
      </div>
       
      <Footer />
      <LoadingScreen display={this.displayLoading()}/>
    </div>
  )
  }
}



export default withCookies(Home);
  
/*
Home.getInitialProps = async (ctx)=>{
  const resp  =await verifySession(ctx);
  return resp
}*/
