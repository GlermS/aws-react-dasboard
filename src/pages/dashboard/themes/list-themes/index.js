import React from 'react'
import axios from 'axios'
import ThemeCard from './theme-card'
import {withCookies} from 'react-cookie'
import './styles.css'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import {Switch, Route} from 'react-router-dom'
// import EditCall from '../edit-call'

  
class ListThemes extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            themesList:[],
        }
    }

    loading = (isLoading)=>{
        if(this.props.loading){
            this.props.loading(isLoading);
        }
    }

    listThemes = async ()=>{
        const {cookies} = this.props.cookies
        this.loading(true)
        const resp = await axios({
          url:process.env.REACT_APP_BACKEND_URI+'/api/adm/themes',
          method: 'get',
          headers: {"Access-Control-Allow-Origin": "*", "authToken":cookies.authToken}
          }).then((response) => {
            //   console.log(response)
            return {data: response.data, status: response.status}
      
        }).catch(error =>{
          return {msg:error, status:401}
        })
        console.log(resp)
        if(resp.data){
            this.setState({themesList:resp.data})
        }
        this.loading(false)
      }

    componentDidMount = async ()=>{
        await this.listThemes()
    }

    availableThemesRender = (themes)=>{
        var themesComp = []
        if(themes){
            themes.forEach((theme,i)=>{
                themesComp.push(
                    <ThemeCard data={theme} keys={i.toString()} key={i.toString()} auth={this.props.auth} choose={this.refresh} loading={this.loading}/>
                )
            })
        }
        
        return themesComp;
    }
    
    render(){
        return(
        <div className ="available-calls scroll">
            <Switch>
                {/* <Route path='/available-calls/:id'>
                    <EditCall update={this.listCalls} loading={this.loading}></EditCall>
                </Route> */}
                <Route path='/list-themes'>
                    <div className="calls-list-container">
                        <h2>Temas disponíveis</h2>
                        <div className = "calls-list">
                            {this.availableThemesRender(this.state.themesList)}
                        </div>
                    </div>
                </Route>
            </Switch>
        </div>
        );
    }
}

export default withAuthenticator(withCookies(ListThemes));
