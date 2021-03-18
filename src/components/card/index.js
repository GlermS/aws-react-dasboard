import React from 'react'
import './style.css'

class Card extends React.Component{
    render() {
        let cl = 'card'
        if(this.props.moderator){
            cl += ' moderator'
        }
        return(
            <div key={this.props.keys} className = {cl}>
                {this.props.children}
            </div>
        )
    }
}

export default Card