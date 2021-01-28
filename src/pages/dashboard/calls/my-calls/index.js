import React from 'react'
import {withCookies} from 'react-cookie'
import './styles.css'


const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
  
class MyCalls extends React.Component{
    myCallsRender = (calls)=>{
        var callsComp = []
        if(calls.client){
            calls.client.forEach((call,i)=>{
                var moderator = []
                const date = new Date(call.date)
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
                            <p className = "call-occupation"><b>Ocupação:</b> {call.clients.length}</p>
                            <p className = "call-date">Data: {date.getDate()} {meses[date.getMonth()]} {date.getFullYear()} às {date.getHours()}h</p>
                        </div>
                        
                        </div>
                    </div>
                )
            })
        }

        if(calls.moderator){
            calls.moderator.forEach((call,i)=>{
                const date = new Date(call.date)
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
                            <p className = "call-occupation"><b>Ocupação:</b> {call.clients.length}</p>
                            <p className = "call-date">Data: {date.getDate()} {meses[date.getMonth()]} {date.getFullYear()} às {date.getHours()}h</p>
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
