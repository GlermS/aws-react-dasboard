import React from 'react'
import { withCookies, CookiesProvider} from 'react-cookie';
import axios from 'axios'
import CallsList from './calls/calls-list';
import {BrowserRouter as Router, Switch, Route,withRouter} from 'react-router-dom'
import MyCalls from './calls/my-calls';


class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            update:0,
            myCalls:[],
            calls:[]
        }
    }

    loading = (isLoading)=>{
        if(this.props.loading){
            this.props.loading(isLoading);
        }
    }

    listUserCalls = async (cookies)=>{
        this.loading(true)
        
        const resp = await axios({
            url:process.env.REACT_APP_BACKEND_URI+'/api/calls/mycalls',
            method: 'get',
            headers: {"Access-Control-Allow-Origin": "*", "authToken":cookies.authToken}
            }).then((response) => {
            //console.log(response);
            
            return {data: response.data, status: response.status}
        
        }).catch(error =>{
            return {msg:error, status:401}
        })
        //console.log(resp)
    
        if(resp.data){
            this.setState({myCalls:resp.data})
        }

        this.loading(false)
    }

    listCalls = async (cookies)=>{
        this.loading(true)

        const resp = await axios({
          url:process.env.REACT_APP_BACKEND_URI+'/api/calls',
          method: 'get',
          headers: {"Access-Control-Allow-Origin": "*", "authToken":cookies.authToken}
          }).then((response) => {
            return {data: response.data, status: response.status}
      
        }).catch(error =>{
          return {msg:error, status:401}
        })
        if(resp.data){
            // console.log(resp.data)
            this.setState({calls:resp.data})
        }

        this.loading(this.loading(true))
      }
    
    updateData =async ()=>{
        await this.listUserCalls(this.props.cookies.cookies);
        await this.listCalls(this.props.cookies.cookies);

    }
    componentDidMount =async ()=>{
        this.updateData()
    }

    render() {
    
        return (
         <Switch>
                <Route path="/mycalls">
                <CookiesProvider>
                    <MyCalls auth ={this.props.auth} update = {this.props.update} calls={this.state.myCalls} loading={this.loading}/>
                </CookiesProvider>
                </Route>

                <Route path="/available-calls">
                <CookiesProvider>
                    <CallsList auth ={this.props.auth} update = {this.props.update} calls={this.state.calls} update={this.loading}/>
                </CookiesProvider>
                </Route>

                <Route path="/register-user">
                
                </Route>

                <Route path="/list-user">
                
                </Route>
                
         </Switch>)
    }
}

export default withRouter(withCookies(Dashboard))