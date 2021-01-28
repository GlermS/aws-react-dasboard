import React from 'react'
import LoadingGIF from '../../assets/icons/loading.gif'
import styles from './Styles.css'

class LoadingScreen extends React.Component{
    render() {
        return(
        <div className = 'loading' style={{display:this.props.display}}>
               <div className ='black-screen' style={styles.blackScreen}>
                <div className ='loading-card' style={styles.card}>
                    <div className= 'loading-card-content' style={styles.content}>
                        <img src={LoadingGIF} alt='loading' style={styles.image}/>
                        <p style={styles.text}>Loading</p>
                    </div>
                </div>
            </div> 
        </div>
            )
    }
}

export default LoadingScreen