import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import Profile from '../../assets/profile.png'
import './style.css'
import {AmplifySignOut } from '@aws-amplify/ui-react';

class SideMenu extends React.Component {
    constructor(props){
        super(props);
        this.state={
            path:this.props.history.location.pathname
        }
    }
    selection = (path)=>{
        if(this.state.path===path){
            return "sidemenu-option selected"
        }else{
            return "sidemenu-option not-selected"
        }
    }
    mobState = (st)=>{
        if (!st){
            return {display:'flex'}
        }else{
            return {display:'none'}
        }
    }
    render() {
        // console.log(this.state)
        return(
            <div className="sidebar" style={this.mobState(this.props.mobileState)}>
                <div className="sidemenu-header">
                    <img src={Profile} className="profile-image" alt="profile"/>
                    <span className="username">{this.props.username}</span>
                </div>
                <div className="sidemenu-options">
                    {this.props.options.map((value,i)=>{
                        return <Link className={this.selection(value.path)} to={value.path} onClick={()=>{this.setState({path:value.path})}} key={i}>{value.text}</Link>
                    })}
                </div>
                <AmplifySignOut className="logout">
                </AmplifySignOut>
            </div>
        );
    }

}

export default withRouter(SideMenu);