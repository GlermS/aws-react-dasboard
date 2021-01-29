import React from 'react'
import EditionIcon from '../../../../assets/icons/pencil.svg'
import moment from 'moment'
import './styles.css'
import {Link} from 'react-router-dom'

class CallCard extends React.Component{
    

    admOrModeratorDisplay = ()=>{
        if(this.props.auth==="adm" || this.props.auth==="moderator"){
            return {display: "flex"}
        }else{
            return {display: "none" }
        }
    }

    admDisplay = ()=>{
        if(this.props.auth==="adm"){
            return {display: "flex"}
        }else{
            return {display: "none" }
        }
    }

    moderatorDisplay = ()=>{
        if(this.props.auth==="moderator"){
            return {display: "flex"}
        }else{
            return {display: "none" }
        }
    }

    render() {
        var moderator = []
        if(this.props.call.moderator[0]){
            moderator = <p className = "call-occupation"><b>Moderador:</b><span className="card-content-text">{this.props.call.moderator[0].name}</span></p>
        }
        const date = moment(this.props.call.date)
        
        var title = '';
        if(this.props.call.theme[0]){
            title = this.props.call.theme[0].title
        }
        
        return(
            <div key={this.props.keys} className = "call-card">
                <div className = "card-content">
                <Link className="edit-button" to={"/available-calls/"+this.props.call._id}><img src={EditionIcon} style={this.admDisplay()} alt="edit"></img></Link>
                <div className="card-description">
                    <p className = "call-theme">{title}</p>
                    {moderator}
                    <p className = "call-occupation"><b>Ocupação:</b><span className="card-content-text">{this.props.call.clients.length}</span></p>
                    <p className = "call-date"><b>Data:</b><span className="card-content-text">{date.format("DD/MM/YYYY")} às {date.hours()}</span></p>
                </div>
                <div className="card-buttons">
                    <button className= "moderate" id={this.props.call._id} onClick= {this.props.moderate} style ={this.admOrModeratorDisplay()}>Moderate</button>
                    <button className= "join-call" id={this.props.call._id} onClick= {this.props.join}>Join call</button>
                </div>
                </div>
            </div>
        )
    }
}

export default CallCard