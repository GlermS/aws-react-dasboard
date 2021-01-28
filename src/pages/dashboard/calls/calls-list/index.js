import React from 'react'
import axios from 'axios'
import EditCall from '../edit-call'
import CallCard from '../call-card'
import {withCookies} from 'react-cookie'
import './styles.css'

  
class CallsList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            callData:{},
        }
    }

    loading =(isLoading)=>{
        if (this.props.loading){
         this.props.loading(isLoading)
        }
    }

    getCallInfo = async (id)=>{
        const { cookies } = this.props;
        this.loading(true)

        await axios({
          url:process.env.REACT_APP_BACKEND_URI+'/api/adm/call',
          method: 'get',
          params:{
            id
          },
          headers: {
          "Access-Control-Allow-Origin": "*",
          authToken: cookies.cookies.authToken
        }
        }).then((response) => {
          this.setState({callData: response.data[0]})
          
        }).catch((error) => {
          console.log(error)
        })
        this.loading(false)
      }

    joinCall = async (event) =>{
        this.loading(true)
        
        await axios({
            url:process.env.REACT_APP_BACKEND_URI+'/api/call/join',
            method: 'post',
            headers: {"Access-Control-Allow-Origin": "*", "authToken":this.props.cookies.cookies.authToken},
            data:{
                callId: event.target.id
            }
            }).then((response) => {
              return {data: response.data, status: response.status}
        
          }).catch(error =>{
            if (error.response.status ===429){
                alert("Você atingiu o seu limite semanal.")
            }else if(error.response.status ===429){
                alert("Desculpa, mas a Call já está lotada.")
            }
            return {msg:error}
          })

        await this.props.update()
        this.loading(false)
    }
    moderateCall = async (event) =>{
        this.loading(true)

        await axios({
            url:process.env.REACT_APP_BACKEND_URI+'/api/call/moderate',
            method: 'post',
            headers: {"Access-Control-Allow-Origin": "*", "authToken":this.props.cookies.cookies.authToken},
            data:{
                callId: event.target.id
            }
            }).then((response) => {
              return {data: response.data, status: response.status}
        
          }).catch(error =>{
            alert('Não autorizado')
            return {status: error.response.status, msg:error}
          })
        
        await this.props.update();
        this.loading(false)
    }
    refresh =async (props)=>{
        await this.getCallInfo(props.id)
        this.props.update()
        return this.state.callData
    }

    availableCallsRender = (calls)=>{
        var callsComp = []
        if(calls){
            console.log(calls)
            calls.forEach((call,i)=>{
                callsComp.push(
                    <CallCard call={call} keys={i.toString()} key={i.toString()} auth={this.props.auth} choose={this.refresh} moderate={this.moderateCall} join={this.joinCall} loading={this.loading}/>
                )
            })
        }
        
        return callsComp
    }

    displayEditCall =()=>{
        if(this.state.callData){
             if(this.props.auth==='adm' && this.state.callData._id){
            return  (<div className ="edit-call">
                        <h2>Editar chamada</h2>
                        <EditCall call={this.state.callData} update={this.refresh} loading={this.loading}/>
                    </div>)
                }
            }
        return 
    }
    
    render(){
        return(
        <div className ="available-calls">
            <h2>Calls disponíveis</h2>
            <div className = "calls-list">
                {this.availableCallsRender(this.props.calls)}
            </div>
        </div>
        );
    }
}

export default withCookies(CallsList);
