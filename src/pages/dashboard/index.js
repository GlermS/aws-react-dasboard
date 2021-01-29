import React from 'react'
import { withCookies, CookiesProvider} from 'react-cookie';
import CallsList from './calls/calls-list';
import {Switch, Route,withRouter} from 'react-router-dom'
import MyCalls from './calls/my-calls';
import Users from './users';
import CreateCall from './calls/createCall';
import RegisterUser from './users/register-user';


class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            update:0,
        }
    }

    loading = (isLoading)=>{
        if(this.props.loading){
            this.props.loading(isLoading);
        }
    }

        render() {
    
        return (
         <Switch>
                <Route path="/mycalls">
                <CookiesProvider>
                    <MyCalls auth ={this.props.auth} update = {this.props.update} loading={this.loading} />
                </CookiesProvider>
                </Route>

                <Route path="/available-calls">
                <CookiesProvider>
                    <CallsList auth ={this.props.auth} update={this.loading} loading={this.loading}/>
                </CookiesProvider>
                </Route>

                <Route path="/create-call">
                <CookiesProvider>
                    <CreateCall loading={this.loading}/>
                </CookiesProvider>
                </Route>

                <Route path="/register-user">
                 <RegisterUser loading={this.loading}/>                
                </Route>

                <Route path="/users-list">
                    <Users loading={this.loading}></Users>
                </Route>
                
         </Switch>)
    }
}

export default withRouter(withCookies(Dashboard))