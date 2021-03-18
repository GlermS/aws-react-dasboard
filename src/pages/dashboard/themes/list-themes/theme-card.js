import React from 'react'
import Card from '../../../../components/card';
import './styles.css'

class ThemeCard extends React.Component{
    constructor(props){
        super(props);
        this.state=this.props.data
    }
    
    render() {
       
        // console.log(this.state)
        return(
            <Card key={this.props.keys}>
                <div className = "card-content">
                {/* <Link className="edit-button" to={"/available-calls/"+this.props.call._id}><img src={EditionIcon} style={this.admDisplay()} alt="edit"></img></Link> */}
                <div className="card-description">
                    <h3 className = "theme-title">{this.state.title}</h3>
                    <p className = "theme-description"><span>{this.state.description}</span></p>
                </div>
                <div className="card-buttons">
                </div>
                </div>
            </Card>
        )
    }
}

export default ThemeCard