import React from 'react'
import EditionIcon from '../../../assets/icons/pencil.svg'
import moment from 'moment'
import './styles.css'

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

    editCall = ()=>{
        //console.log(this.props.call._id)
        this.props.choose({id:this.props.call._id})
        
    }

    render() {
        var moderator = []
        if(this.props.call.moderator[0]){
            moderator = <p className = "call-occupation"><b>Moderador:</b> {this.props.call.moderator[0].name}</p>
        }
        const date = moment(this.props.call.date)
        
        var title = '';
        if(this.props.call.theme[0]){
            title = this.props.call.theme[0].title
        }
        
        return(
            <div key={this.props.keys} className = "call-card">
                <div className = "card-content">
                <div className='card-header'><button className="edit-button" onClick={this.editCall}><img src={EditionIcon} style={this.admDisplay()} alt="edit"></img></button></div>
                <div className="card-description">
                    <p className = "call-theme">{title}</p>
                    {moderator}
                    <p className = "call-occupation"><b>Ocupação:</b> {this.props.call.clients.length}</p>
                    <p className = "call-date">Data: {date.format("DD/MM/YYYY")} às {date.hours()}h</p>
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