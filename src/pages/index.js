import './style.css'
import { withCookies} from 'react-cookie';
import Dashboard from './dashboard'
import Footer from '../components/footer';
import {useState, useEffect } from 'react';
import SideMenu from '../components/sideMenu';
import Amplify, {Auth}  from 'aws-amplify';
import awsconfig from '../aws-exports';
import LoadingScreen from '../components/loadingScreen';
import LoadingContext from './context'
Amplify.configure(awsconfig);

function Home(props){
  const [session, setSession] = useState({authToken:'', userId:''})
  const [name, setName] = useState('')
  const [role, setRole] = useState('admin')
  const [isLoading, setIsLoading] = useState(false)
  const [ms, setMs] = useState(true)

  useEffect(()=>{
    getToken();    
  }, [session])

  async function getToken(){
    let sessionInfo = await Auth.currentSession()
      if(session.authToken !== sessionInfo.idToken.jwtToken){
        session.authToken = sessionInfo.idToken.jwtToken
        setSession(session)
      }
     return session
  }

  const options = {
    'client':[
      {path:'/', text:'Principal'},
      {path:'/meetings', text:'Meetings'}
  ],
    'moderator':[
      {path:'/', text:'Principal'},
      {path:'/meetings', text:'Meetings'}
  ],
    'admin':[
      {path:'/', text:'Principal'},
      {path:'/meetings', text:'Meetings'},
      {path:'/users', text:'Users'},
      {path:'/topics', text:'Topics'},
      {path:'/tags', text:'Tags'}      
  ],
  }

  
  return (
    
    <div className="container" id="home">
      {/* {this.redirect()} */}
     
      <SideMenu username={name} options ={options[role]} mobileState = {ms}></SideMenu>
      <div id="sidebar-button"><button onClick = {()=>{setMs(!ms)}}>menu</button></div>
      {/* logout={this.logoutFunc} */}
      <LoadingContext.Provider value={{isLoading, setIsLoading}} className='content'>
          <Dashboard auth = {role} username ={name} getToken={async ()=> await getToken()}/>
          <LoadingScreen></LoadingScreen>
      </LoadingContext.Provider>
       
      <Footer />
    </div>
  )

}



export default withCookies(Home);
  
/*
Home.getInitialProps = async (ctx)=>{
  const resp  =await verifySession(ctx);
  return resp
}*/
