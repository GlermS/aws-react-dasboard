import React from 'react'
import axios from 'axios'
import {withCookies} from 'react-cookie'

class UserCard extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name: props.name,
            id: props.id,
            email: props.email,
            authorization: props.auth,
            password: ''
        }
    }

    updateUser = async ()=>{
        const { cookies } = this.props;
        await axios({
          url:process.env.REACT_APP_BACKEND_URI+'/api/adm/user',
          method: 'put',
          data: {userData: {name: this.state.name,
            id: this.state.id,
            email: this.state.email,
            authorization: this.state.authorization,}},
          headers: {
          "Access-Control-Allow-Origin": "*",
          authToken: cookies.cookies.authToken
        }
        }).then((response) => {
          console.log(response.data)
          
        }).catch((error) => {
          console.log(error)
        })  
      }

    deleteUser = async ()=>{
        const { cookies } = this.props;
        await axios({
          url:process.env.REACT_APP_BACKEND_URI+'/api/adm/user',
          method: 'delete',
          data: {userId: this.state.id},
          headers: {
          "Access-Control-Allow-Origin": "*",
          authToken: cookies.cookies.authToken
        }
        }).then((response) => {
          console.log(response.data)
          
        }).catch((error) => {
          console.log(error)
        })
        await this.props.update()

        }

    changePassword =async (e)=>{
      e.preventDefault()
        const { cookies } = this.props;
        await axios({
          url:process.env.REACT_APP_BACKEND_URI+'/api/adm/user/password',
          method: 'put',
          data: {userData: {id: this.state.id, password: this.state.password}},
          headers: {
          "Access-Control-Allow-Origin": "*",
          authToken: cookies.cookies.authToken
        }
        }).then((response) => {
          alert("Senha alterada com sucesso")
          
        }).catch((error) => {
          console.log("Houve algum erro no processo de alteração da senha")
        })
        this.setState({password:''})

        }
    

    submitChanges =async(e)=>{
      e.preventDefault()
      await this.updateUser()
      await this.props.update()
    }


    render(){
        return (
        <div key={this.props.keys} className = "user-card">
            <div className = "user-card-content">
                <form className="user-card-form">
                  <div className="inputs">
                    <input type="text" className = "user-name" value={this.state.name} onChange={(e)=>{this.setState({name: e.target.value})}}/>
                    <input type="text" className = "user-email" value={this.state.email} onChange={(e)=>{this.setState({email: e.target.value})}}/>
                    <select className="user-auth" value={this.state.authorization} onChange={(e)=>{this.setState({authorization: e.target.value})}}>
                        <option value="client">Cliente</option>
                        <option value = "moderator">Moderador</option>
                        <option value = 'adm'>Adm</option>
                    </select>
                    </div>
                    <div className='buttons'>
                      <button type="submit" className ='submit-changes' onClick = {this.submitChanges}>Enviar mudança</button>
                      <button className="delete-user" onClick = {async (e)=>{e.preventDefault(); await this.deleteUser()}}> Excluir usuário</button>
                    </div>
                    
                </form>
                <form className="change-password">
                    <div className="inputs">
                        <input type="password" value={this.state.password} onChange={(e)=>{this.setState({password: e.target.value})}}></input>
                    </div>
                    <div className='buttons'>
                      <button type="submit" onClick={this.changePassword}>Alterar senha</button>
                    </div>
                    
                </form>
            </div>
        </div>)}
}

export default withCookies(UserCard)