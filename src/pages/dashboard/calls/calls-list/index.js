import React from 'react'
import axios from 'axios'
import CallCard from './call-card'
import {withCookies} from 'react-cookie'
import './styles.css'
import {Switch, Route} from 'react-router-dom'
import EditCall from '../edit-call'

  
class CallsList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            callsList:[],
        }
    }

    loading = (isLoading)=>{
        if(this.props.loading){
            this.props.loading(isLoading);
        }
    }

    listCalls = async ()=>{
        const {cookies} = this.props.cookies
        this.loading(true)
        const resp = await axios({
          url:process.env.REACT_APP_BACKEND_URI+'/api/calls',
          method: 'get',
          headers: {"Access-Control-Allow-Origin": "*", "authToken":cookies.authToken}
          }).then((response) => {
            //   console.log(response)
            return {data: response.data, status: response.status}
      
        }).catch(error =>{
          return {msg:error, status:401}
        })
        if(resp.data){
            this.setState({callsList:resp.data})
        }
        this.loading(false)
      }

    componentDidMount = async ()=>{
        await this.listCalls()
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

        await this.listCalls();
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
                alert(response.data)
                return {data: response.data, status: response.status}
        
          }).catch(error =>{
            alert('Não autorizado')
            return {status: error.response.status, msg:error}
          })
          
        await this.listCalls;
        this.loading(false)
    }

    availableCallsRender = (calls)=>{
        var callsComp = []
        if(calls){
            calls.forEach((call,i)=>{
                callsComp.push(
                    <CallCard call={call} keys={i.toString()} key={i.toString()} auth={this.props.auth} choose={this.refresh} moderate={this.moderateCall} join={this.joinCall} loading={this.loading}/>
                )
            })
        }
        
        return callsComp
    }
    
    render(){
        return(
        <div className ="available-calls scroll">
            <Switch>
                <Route path='/available-calls/:id'>
                    <EditCall update={this.listCalls} loading={this.loading}></EditCall>
                </Route>
                <Route path='/available-calls'>
                    <div className="calls-list-container">
                        <h2>Calls disponíveis</h2>
                        <div className = "calls-list">
                            {this.availableCallsRender(this.state.callsList)}
                        </div>
                    </div>
                </Route>
            </Switch>
        </div>
        );
    }
}

export default withCookies(CallsList);
