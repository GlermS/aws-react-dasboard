import React from 'react'
import axios from 'axios'
import {withCookies} from 'react-cookie'
import moment from 'moment-timezone'
import {withRouter} from 'react-router-dom'
import './styles.css'

class EditCall extends React.Component{
  constructor(props){
    super(props);
    this.state ={
        id:props.match.params.id,
        theme:'',
        date:'',
        clients:[],
        moderator:{name:'',email:''},
        themesList:[]
        }
    }
  loading = (isLoading)=>{
    if(this.props.loading){
        this.props.loading(isLoading);
    }
  }
  updateCall = async ()=>{
    this.loading(true)
    const { cookies } = this.props;

    var data = Object.assign({},this.state)
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
    delete data['id']
    delete data['themesList']

    await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/api/adm/call',
      method: 'put',
      params:{id:this.state.id},
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
    this.loading(false)
  }

  getCallInfo = async ()=>{
    this.loading(true)
    const { cookies } = this.props;
    console.log(this.state.id)
    await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/api/adm/call',
      method: 'get',
      params:{id:this.state.id},
      headers: {
      "Access-Control-Allow-Origin": "*",
      authToken: cookies.cookies.authToken
    }
    }).then((response) => {
      const data = response.data[0]
      this.setState({
        theme:data.theme,
        moderator:data.moderator,
        clients:data.clients,
        date:data.date,
        link:data.link
      })
    }).catch((error) => {
      alert('Mudança inválida')
    })
    this.loading(false)
  }

  removeUser = async (e)=>{
    
    e.preventDefault();
    this.loading(true)
    const { cookies } = this.props;
    const email=e.target.value

    await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/api/adm/call/client',
      method: 'delete',
      params:{id:this.state.id, email},
      headers: {
      "Access-Control-Allow-Origin": "*",
      authToken: cookies.cookies.authToken
    }
    }).then((response) => {
      alert('Sucesso')
  
    }).catch((error) => {
      alert('Mudança inválida')
    })

    await this.getCallInfo()
    await this.props.update()
    this.loading(false)
    }

    UserData(props){
        if(props.type==='moderator'){
          return(
          <div key={props.key} className="edit-user">
            <span>{props.name}</span>
            <input value={props.email} className="edit-user-input" onChange={(e)=>{let moderator = this.state.moderator;moderator[0].email=e.target.value;this.setState({moderator})}}></input>
          </div>)
        }else{
          if(this.state.clients[props.key]){
            return(<div key={props.key} className="edit-user">
                    <span>{props.name}</span>
                    <input value={props.email} className="edit-user-input" onChange={(e)=>{let data = this.state.clients;data[props.key].email=e.target.value; this.setState({client:data})}}></input>
                    <button onClick={this.removeUser} value={props.email}>Remover</button>
                  </div>)
          }else{
            return(
            <div key={props.key} className="edit-user">
              <span>{props.name}</span>
              <input value={props.email} className="edit-user-input" onChange={(e)=>{let data = this.state.clients;data=[{email: e.target.value}]; this.setState({clients:data})}}></input>
            </div>)
          }
        }
      }

    deleteCall =async (e)=>{
        this.loading(true)
        e.preventDefault();
        const { cookies } = this.props;

        await axios({
          url:process.env.REACT_APP_BACKEND_URI+'/api/adm/call',
          method: 'delete',
          params: {id: this.state.id},
          headers: {
          "Access-Control-Allow-Origin": "*",
          authToken: cookies.cookies.authToken
        }
        }).then((response) => {
          
        }).catch((error) => {
          console.log(error)
        })

        await this.props.update()
        this.props.history.push('/available-calls')
        this.loading(false)
    }

    submitChanges =async(e)=>{
        e.preventDefault();
        await this.updateCall()
        await this.props.update()
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

    listThemes = async ()=>{
      const { cookies } = this.props;
      this.loading(true)

      await axios({
        url:process.env.REACT_APP_BACKEND_URI+'/api/adm/themes',
        method: 'get',
        headers: {
        "Access-Control-Allow-Origin": "*",
        authToken: cookies.cookies.authToken
      }
      }).then((response) => {
        this.setState({themesList: response.data})
      }).catch((error) => {
        alert('Mudança inválida')
      })

      this.loading(false)
    }

    componentDidMount=async()=>{
      await this.getCallInfo()
      await this.listThemes()
    }


    render(){
      let date = moment(this.state.date)
      console.log(this.state.theme)
      return (
        <div className = "edit-call">
          <form className="edit-call-form">
            <div className="inputs">
              <label>
              <span>Tema</span>
              <select value={this.state.theme} onChange={(e)=>{this.setState({theme: e.target.value})}}>
                    <option value=''>unknown</option>
                  {this.state.themesList.map((val,index)=>{
                    return <option value={val._id}>{val.title}</option>
                  })}
              </select>

              </label>
              <label>
                <span>Data</span>
                <input type="datetime-local" value={date.format('yyyy-MM-DDThh:mm')} className = "call-date"  onChange={(e)=>{this.setState({date:e.target.value})}}/>
              </label>

              <label>
                <span>Link</span>
                <input type="text" value={this.state.link} className = "call-link"  onChange={(e)=>{this.setState({link:e.target.value})}}/>
              </label>

              <p>Clientes</p>
              {this.renderUser(this.state.clients,'clients')}
              <button className="add-client" onClick={(e)=>{e.preventDefault();var data=this.state;data.clients.push({email:''}); this.setState(data)}} >Adicionar cliente</button>
              <p>Moderador</p>
              {this.renderUser(this.state.moderator, 'moderator')}
              </div>
              <div className='buttons'>
                <button type="submit" className ='submit-changes'  onClick = {this.submitChanges}>Enviar mudança</button>
                <button className="delete-user" onClick = {this.deleteCall}> Excluir Call</button>
              </div>
          </form>
        </div>)
      }
}

export default withRouter(withCookies(EditCall))