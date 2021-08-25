import React, { useContext } from 'react'
import LoadingGIF from '../../assets/icons/loading.gif'
import LoadingContext from '../../pages/context'
import './Styles.css'

export function LoadingScreen (props){
    const {isLoading} = useContext(LoadingContext)
    console.log(isLoading)
    if(isLoading){
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
    }else{
        return <></>
    }        

}

export default LoadingScreen