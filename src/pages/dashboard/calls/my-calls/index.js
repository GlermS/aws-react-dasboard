import React from 'react'
import {withCookies} from 'react-cookie'
import Card from '../../../../components/card'
import './styles.css'
import moment from 'moment';
import axios from 'axios';

  
class MyCalls extends React.Component{
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
    
    listUserCalls = async ()=>{
        this.loading(true)
        const {cookies} = this.props.cookies
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
            this.setState({callsList:resp.data})
        }
        this.loading(false)

    }

    componentDidMount= async() =>{
        await this.listUserCalls()
    }
    participate = (link)=>{
        if (link!=''){
            return<a href={link}  target="_blank" rel="noopener noreferrer">Entrar na sala</a>
    }}
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
                var link = ''
                if(call.link){
                    link = call.link
                }

                callsComp.push(

                    <Card key={i}>
                        <div className = "card-content">
                        <div className = "card-description">
                            <p className = "call-theme">{title}</p>
                            {moderator}
                            <p className = "call-occupation"><b>Ocupação:</b><span className="card-content-text">{call.clients.length}</span></p>
                            <p className = "call-date"><b>Data:</b><span className="card-content-text">{date.format('DD/MM/YYYY')} às {date.format('HH:mm')}h</span></p>
                            {this.participate(link)}
                        </div>
                        </div>
                    </Card>
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
                var link = ''
                if(call.link){
                    link = call.link
                }
                callsComp.push(
                    <Card key={"M"+i} moderator={true} >
                        <div className = "card-content">
                        <div className = "card-description">
                            <p className = "call-theme">{title}</p>
                            <p className = "call-occupation"><b>Ocupação:</b><span className="card-content-text">{call.clients.length}</span></p>
                            <p className = "call-date"><b>Data:</b><span className="card-content-text">{date.format('DD/MM/YYYY')} às {date.format('HH:mm')}h</span></p>
                            {this.participate(link)}
                         </div>
                       </div> 
                    </Card>
                )
            })
        }
        return callsComp
    }
    
    render(){
        // console.log(this.props.calls)
        return(
        <div className="my-calls scroll">
            <div className="my-calls-content">
               <h2 >Minhas Calls</h2>
                <div className = "calls-list">
                    {this.myCallsRender(this.state.callsList)}
                </div> 
            </div>
            {this.props.loadingscreen}
        </div>
        );
    }
}

export default withCookies(MyCalls);
