import React from 'react'
import Calls from '../calls'
import Users from '../users'
import './style.css'

class AdmDashboard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            areas:['calls', 'users'],
            area:'calls',
            click:false
        }
    }

    switchArea = ()=>{
        if(this.state.area ==='calls'){
            return <Calls auth = "adm" update = {this.props.updateCalls} mycalls={this.props.mycalls} calls={this.props.calls}/>
        }else if(this.state.area ==='users'){
            return <Users />
        }

    }
    selected = (area)=>{
        if(this.state.area===area){
            return 'selected'
        }
        
    }

    
    
    render() {

        return(
            <div>
              <div className ="dashboard-menu">
                    <div className="menu-item">
                        <button className={this.selected('calls')} onClick={()=>{this.setState({area:'calls'})}} name='call'>Calls</button>
                    </div>
                    <div className="menu-item">
                        <button className={this.selected('users')}  onClick={()=>{this.setState({area:'users'})}} name='users'>Usuários</button>  
                    </div>
                </div>
                <div>
                    {this.switchArea()}
                </div>
            </div>


     )
    }
}

export default AdmDashboard