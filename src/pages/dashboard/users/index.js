import axios from 'axios';
import React from 'react'
import {CookiesProvider, withCookies} from 'react-cookie'
import UserCard from './user-card'
import './style.css'

  
class Users extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users:[]
        }
    }
    loading = (isLoading)=>{
        if(this.props.loading){
            this.props.loading(isLoading);
        }
    }

    listUsers = async ()=>{
    this.loading(true)
      const { cookies } = this.props;
      await axios({
        url:process.env.REACT_APP_BACKEND_URI+'/api/adm/users',
        method: 'get',
        headers: {
        "Access-Control-Allow-Origin": "*",
        authToken: cookies.cookies.authToken
      }
      }).then((response) => {
        this.setState({users: response.data})
      }).catch((error) => {
        alert(error.toString())
      })
      this.loading(false)
    }

    componentDidMount = ()=>{
       this.listUsers()
    }

    usersRender = (users)=>{
        var usersComp = []
        if(users){
            users.forEach((user,i)=>{
                usersComp.push(
                    <CookiesProvider key={i.toString()}>
                        <UserCard  i={i.toString()} name={user.name} id={user._id} email = {user.email} auth ={user.authorization} update={this.listUsers}/>
                    </CookiesProvider>
                )
            })
        }
        return usersComp;
    }
    
    render(){
        return(
        <div className="users">
            <div className='users-section'>
                <h2>Usuários</h2>
                <div className = "users-list">
                    {this.usersRender(this.state.users)}
                </div>
            </div>
        </div>
        );
    }
}

export default withCookies(Users);
