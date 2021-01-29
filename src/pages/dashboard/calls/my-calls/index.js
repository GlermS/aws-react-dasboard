import React from 'react'
import {withCookies} from 'react-cookie'
import './styles.css'
import moment from 'moment';
  
class MyCalls extends React.Component{
    myCallsRender = (calls)=>{
        var callsComp = []
        if(calls.client){
            calls.client.forEach((call,i)=>{
                var moderator = []
                const date = moment(call.date)
                var title = '';
                if(call.theme){
                    if(call.theme[0]){
                        title = call.theme[0].title
                    }
                }

                callsComp.push(
                    <div key={i} className = "call-card">
                        <div className = "card-content">
                        <div className = "card-description">
                            <p className = "call-theme">{title}</p>
                            {moderator}
                            <p className = "call-occupation"><b>Ocupação:</b><span className="card-content-text">{call.clients.length}</span></p>
                            <p className = "call-date"><b>Data:</b><span className="card-content-text">{date.format('DD/MM/YYYY')} às {date.format('hh:mm')}h</span></p>
                        </div>
                        
                        </div>
                    </div>
                )
            })
        }

        if(calls.moderator){
            calls.moderator.forEach((call,i)=>{
                const date = moment(call.date)
                var title = '';
                if(call.theme){
                    if(call.theme[0]){
                        title = call.theme[0].title
                    }
                }
                callsComp.push(
                    <div key={"M"+i} className = "call-card mycall-moderator">
                        <div className = "card-content">
                        <div className = "card-description">
                            <p className = "call-theme">{title}</p>
                            <p className = "call-occupation"><b>Ocupação:</b><span className="card-content-text">{call.clients.length}</span></p>
                            <p className = "call-date"><b>Data:</b><span className="card-content-text">{date.format('DD/MM/YYYY')} às {date.format('hh:mm')}h</span></p>
                        </div>
                       </div> 
                    </div>
                )
            })
        }
        return callsComp
    }
    
    render(){
        // console.log(this.props.calls)
        return(
        <div className="my-calls">
            <h2 >Minhas Calls</h2>
            <div className = "calls-list">
                {this.myCallsRender(this.props.calls)}
            </div>
        </div>
        );
    }
}

export default withCookies(MyCalls);
