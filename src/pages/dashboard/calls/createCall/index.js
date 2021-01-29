import React from 'react'
import axios from 'axios'
import {withCookies} from 'react-cookie'
import moment from 'moment'
import './style.css'



class CreateCall extends React.Component{
    constructor(props){
      super(props);
      this.state ={
        created:false,
        date: '',
        invalidData: false,
        theme:'',
        themesList:[]
      }
    }
    loading = (isLoading)=>{
      if(this.props.loading){
          this.props.loading(isLoading);
      }
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

    submitForm = async (event)=>{
      
      event.preventDefault();
      const { cookies } = this.props;
      this.loading(true)

      await axios({
        url:process.env.REACT_APP_BACKEND_URI+'/api/adm/calls',
        method: 'post',
        data: {date:moment(this.state.date).utcOffset(-3, true).format(), theme:this.state.theme},
        headers: {
        "Access-Control-Allow-Origin": "*",
        authToken: cookies.cookies.authToken
      }
      }).then((response) => {
        console.log(response)
        
        if(response.status===201){
          this.setState({created:true, invalidData:false})
         }else{
        this.setState({created:false, invalidData:true})}
      }).catch((error) => {
        alert("Acesso não autorizado, apenas administradores podem criar chamadas. Por favor, faça o seu login novamente")
      this.setState({created:false, invalidData:false})
    })  
    this.loading(false)
    }

    componentDidMount = async ()=>{
      await this.listThemes()
    }

    
    invalidMessage = ()=>{
      if(this.state.invalidData){
        return<p>date ou senha não encontrados</p>
      }
    }
    createdMessage = ()=>{
      if(this.state.created){
        return<p>A sua Call foi criada</p>
      }
    }

    render(){
      return(
        <div className="create-call">
          <form className ="create-call-form" >
            <label>
            <span>Data:</span>
            <input type = 'datetime-local' name = "date" value = {this.state.date} onChange ={(e)=>{this.setState({date:e.target.value, invalidData:false, created: false})}}></input>
            </label>
            <label>
            <span>Tema:</span>
            <select value={this.state.theme} onChange={(e)=>{this.setState({theme: e.target.value})}}>
              <option value=''>- - Unknown - -</option>
              {this.state.themesList.map((val,index)=>{
                return <option value={val._id}>{val.title}</option>
              })}
            </select>            
            </label>
            <div>
            <button type="submit" onClick={this.submitForm}>Enviar</button>
            </div>
            {this.invalidMessage()}
            {this.createdMessage()}
          </form>
        </div>
        
        );

    }
    

  }

  export default withCookies(CreateCall);