import React from 'react'
import axios from 'axios'
import {withCookies} from 'react-cookie'
import styles from './Style.css.js'
import moment from 'moment-timezone'

class EditCall extends React.Component{
  constructor(props){
      super(props);
      this.state ={
          data:this.props.call
          }
      }

    loading =(isLoading)=>{
      if (this.props.loading){
        this.props.loading(isLoading)
      }
    }

  componentDidMount = ()=>{
    if(!this.state.data.moderator){
      this.setState({data:{moderator:['']}})
    }
  }
  componentDidUpdate = ()=>{
    if(this.state.data._id!==this.props.call._id){
      this.setState({data : this.props.call})
    }
  }

  refresh =async ()=>{
    const call = await this.props.update({id:this.state.data._id})
    this.setState({data:call})
    this.loading(false)
  }

  updateCall = async ()=>{
    const { cookies } = this.props;
    this.loading(true)

    var data = Object.assign({},this.state.data)
    data.date = moment(data.date).utcOffset(-3, true).format()
    data.clients = data.clients.map((user,i)=>{
      return user.email
    })
    if(!data.clients[0]){
      delete data["clients"]
    }
    if(data.moderator[0]){
      data.moderator = data.moderator[0].email
    }else{
      data.moderator = ''
    }
    await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/api/adm/call',
      method: 'put',
      params:{id:this.state.data._id},
      data: data,
      headers: {
      "Access-Control-Allow-Origin": "*",
      authToken: cookies.cookies.authToken
    }
    }).then((response) => {
      alert('Sucesso')
    }).catch((error) => {
      alert('Mudança inválida')
    })

    await this.refresh()
  }

  removeUser = async (e)=>{
    e.preventDefault();
    this.loading(true)
    const { cookies } = this.props;
    const email=e.target.value

    await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/api/adm/call/client',
      method: 'delete',
      params:{id:this.state.data._id, email},
      headers: {
      "Access-Control-Allow-Origin": "*",
      authToken: cookies.cookies.authToken
    }
    }).then((response) => {
      alert('Sucesso')
      
    }).catch((error) => {
      alert('Mudança inválida')
    })

    await this.refresh()
    }

    UserData(props){
        if(this.state.data[props.type]){
          var data = this.state.data
          if(props.type==='moderator'){
            if(data.moderator.length===0){
              data.moderator=[{email:''}]
            }
            return(
            <div key={props.key}>
              <span>{props.name}</span>
              <input value={props.email} className="edit-user" onChange={(e)=>{data.moderator[0].email=e.target.value;this.setState({data})}}></input>
            </div>)
          }else{
            if(data.clients[props.key]){
              return(<div key={props.key}>
                      <span>{props.name}</span>
                      <input value={props.email} className="edit-user" onChange={(e)=>{data.clients[props.key].email=e.target.value; this.setState({data})}}></input>
                      <button onClick={this.removeUser} value={props.email}>Remover</button>
                    </div>)
            }else{
              return(
              <div key={props.key}>
                <span>{props.name}</span>
                <input value={props.email} className="edit-user" onChange={(e)=>{data.clients=[{email: e.target.value}]; this.setState({data})}}></input>
              </div>)
            }
          }}
      }

    deleteCall =async (e)=>{
        e.preventDefault();
        this.loading(true)
        const { cookies } = this.props;
        await axios({
          url:process.env.REACT_APP_BACKEND_URI+'/api/adm/call',
          method: 'delete',
          params: {id: this.state.data._id},
          headers: {
          "Access-Control-Allow-Origin": "*",
          authToken: cookies.cookies.authToken
        }
        }).then((response) => {
          console.log(response.data)
          
        }).catch((error) => {
          console.log(error)
        })

        await this.refresh()
        this.loading(false)
    }

    submitChanges =async(e)=>{
        e.preventDefault();
        await this.updateCall()
    }

    renderUser = (list, type)=>{
      var listComp =  []
      if(Array.isArray(list)){
        list.forEach((user,i)=>{
          listComp.push(this.UserData({name:user.name,key:i, email: user.email, type}))
        })
      }
      

      if(listComp.length===0){
        listComp.push(this.UserData({name:'',key:0, email:'', type}))
      }
      
      return listComp
    }


    render(){
      if(this.state.data){
        const date = moment(this.state.data.date).format("YYYY-MM-DDThh:mm:ss")
        
        return (
        <div className = "edit-call-card" style={styles.card}>
            <div className = "edit-call-card-content" style={styles.card}>
                <form style={styles.card}>
                  <div className="inputs">
                    <label>
                    <span>Tema</span>
                    <input type="text" className = "call-theme" value={this.state.data.theme} onChange={(e)=>{var data = this.state.data; data.theme=e.target.value; this.setState({data})}}/>
                    </label>
                    <label>
                      <span>Data</span>
                      <input type="datetime-local" className = "call-date" value={date} onChange={(e)=>{var data = this.state.data; data.date=e.target.value; this.setState({data})}}/>
                    </label>

                    <p>Clientes</p>
                    {this.renderUser(this.state.data.clients,'clients')}
                    <button className="add-client" onClick={(e)=>{e.preventDefault();var data=this.state.data;data.clients.push({email:''}); this.setState({data})}} >Adicionar cliente</button>
                    <p>Moderador</p>
                    {this.renderUser(this.state.data.moderator, 'moderator')}
                    </div>
                    <div className='buttons'>
                      <button type="submit" className ='submit-changes' style={styles.button} onClick = {this.submitChanges}>Enviar mudança</button>
                      <button className="delete-user" style={styles.button} onClick = {this.deleteCall}> Excluir Call</button>
                    </div>
                </form>
            </div>
        </div>)
      }else{
        return <div></div>
      }
     }
}

export default withCookies(EditCall)