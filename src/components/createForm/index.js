import React from 'react'
import axios from 'axios'
import {withCookies} from 'react-cookie'
// import moment from 'moment'
import './style.css'



class CreateForm extends React.Component{
    constructor(props){
      super(props);
      this.state = {fields: props.campos}
      this.state['created'] = false
      this.state['invalidData'] = false
    }

    loading = (isLoading)=>{
      if(this.props.loading){
          this.props.loading(isLoading);
        }
    }
    
    submitForm = async (event)=>{
      event.preventDefault();
      const { cookies } = this.props;
      this.loading(true)
      var data={}
      Object.keys(this.state.fields).map((k)=>{data[k]=this.state.fields[k].value})
      await axios({
        url:process.env.REACT_APP_BACKEND_URI+this.props.path,
        method: 'post',
        data,
        headers: {
        "Access-Control-Allow-Origin": "*",
        authToken: cookies.cookies.authToken
      }
      }).then((response) => {
        // console.log(response)
        
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
      // await this.listThemes()
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

    field = (name)=>{
        var field = this.state.fields[name]
        console.log(field)
        if(field.type === 'input'){
            // console.log('input')
            return(
                <label>
                    <span>{field.label}</span>
                    <input type = 'text' name = {name} value = {field.value} onChange ={(e)=>{field.value =e.target.value; this.setState({[name]:field})}}></input>
                </label>
            )
        }else if(field.type === 'select'){
          // console.log(field.values)
            return(
                
                <label>
                    <span>{field.label}</span>
                    {/* <input type = {field.inputType} name = {name}  onChange ={(e)=>{field.value =e.target.value; this.setState({name:field})}}></input> */}
                    <select value = {field.value} onChange ={(e)=>{field.value =e.target.value; this.setState({name:field})}}>
                        <option value=''>- - Unknown - -</option>
                        {field.values.map((val,index)=>{
                            return <option value={val._id}>{val.title}</option>
                        })}
                    </select>
                </label>
            )
        } else if(field.type === 'date'){
          // console.log('input')
          return(
              <label>
                  <span>{field.label}</span>
                  <input type = 'datetime-local' name = "date" value = {this.state.date} onChange ={(e)=>{field.value =e.target.value; this.setState({name:field})}}></input>
              </label>
          )
      } 
    }

    render(){
      let f = []
      // console.log(this.props.campos)
      if (this.props.campos){
        let fi = this.props.campos
        
        f =Object.keys(fi).map((k)=>{return this.field(k)})
      }
      // console.log(f)
      return(<div className="create">
          <form className ="create-form" >
            {f}
            <div>
            <button type="submit" onClick={this.submitForm}>Enviar</button>
            </div>
            {this.invalidMessage()}
            {this.createdMessage()}
          </form>
        </div>);
    }
  }



  export default withCookies(CreateForm);