import React from 'react'
import {Link} from 'react-router-dom'
import Calls from '../calls'

class AdmDashboard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            area:'calls'
        }
    }

    switchArea = ()=>{
        if(this.state.area ==='calls'){
            return <Calls auth = "adm" update = {this.props.updateCalls} mycalls={this.props.mycalls} calls={this.props.calls}></Calls>
        }else{
            return <p>Ha</p>
        }

    }
    
    render() {
        return(
            <div>
              <div className ="dashboard-menu">
                    <div className="menu-item">
                        <button onClick={()=>{this.setState({area:'calls'})}}>Calls</button>
                    </div>
                    <div className="menu-item">
                        <button onClick={()=>{this.setState({area:'user'})}}>Usuários</button>  
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