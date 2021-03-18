import React from 'react'
import axios from 'axios'
import {withCookies} from 'react-cookie'
import moment from 'moment'
import CreateForm from '../../../../components/createForm'
import './style.css'



class CreateCall extends React.Component{
    constructor(props){
      super(props);
      this.state ={
        created:false,
        date: '',
        invalidData: false,
        theme:'',
        themesList:[],
        link:'',
      }
    }
    loading = (isLoading)=>{
      if(this.props.loading){
          // console.log('Loanding')
          this.props.loading(isLoading);
      }else{
        console.log('done')
      }
  }
    
    listThemes = async ()=>{
      const { cookies } = this.props;
      console.log('tentando listar')
      this.loading(true)

      await axios({
        url:process.env.REACT_APP_BACKEND_URI+'/api/adm/themes',
        method: 'get',
        headers: {
        "Access-Control-Allow-Origin": "*",
        authToken: cookies.cookies.authToken
      }
      }).then((response) => {
        console.log(response.data)
        this.setState({themesList: response.data})
      }).catch((error) => {
        alert('Mudança inválida')
      })
      console.log('Alguém')
      this.loading(false)
    }

    submitForm = async (event)=>{
      
      event.preventDefault();
      const { cookies } = this.props;
      this.loading(true)

      await axios({
        url:process.env.REACT_APP_BACKEND_URI+'/api/adm/calls',
        method: 'post',
        data: {date:moment(this.state.date).utcOffset(-3, true).format(), theme:this.state.theme, link:this.state.link},
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
      let themes = this.state.themesList
      return(
          <CreateForm loading={this.loading} path='/api/adm/calls' area='call' 
          campos={{date:{label:'Data', type:'date', value:''}, 
          theme:{label:'Tema', type:'select', values:themes
        
        }}} />        
        );

    }
    

  }

  export default withCookies(CreateCall);