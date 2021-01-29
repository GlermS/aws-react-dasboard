import React from 'react'
import LoadingGIF from '../../assets/icons/loading.gif'
import './Styles.css'

class LoadingScreen extends React.Component{
    // this.props.display
    render() {
        return(
        <div className = 'loading' style={{display: this.props.display}}>
               <div className ='black-screen'>
                <div className ='loading-card'>
                    <div className= 'loading-card-content'>
                        <img src={LoadingGIF} alt='loading'/>
                        <p >Loading</p>
                    </div>
                </div>
            </div> 
        </div>
            )
    }
}

export default LoadingScreen