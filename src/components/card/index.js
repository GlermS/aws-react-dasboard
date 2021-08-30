import {Link} from 'react-router-dom'
import { deleteMeeting } from '../../utils/meetings'
import './style.css'

function Card(props){
    const updateButton = ()=>{
        if (props.updatePath){
            return <Link to={{
                pathname: props.updatePath,
                search: "?id="+props.cardId
            }}>update</Link>
        }
    }
    const deleteButton = ()=>{
        if (props.deleteFunc){
            return <button onClick={(e)=>{
                e.preventDefault();
                props.deleteFunc();
            }}>delete</button>
        }
    }
    const joinButton = ()=>{
        if (props.joinFunc){
            return <button onClick={(e)=>{
                e.preventDefault();
                props.joinFunc();
            }}>Join</button>
        }
    }
    const startButton = ()=>{
        if (props.joinFunc){
            return <a className="start-button" href={'https://meeting.yubbe.club/'+props.cardId}>Join</a>
        }
    }


    switch (props.type) {
        case 'my-meeting':
            return(
                <div className = 'card' >
                    <div className='card-header'>
                        <h3>{props.tag}</h3>
                    </div>
                    <div className='card-body'>
                    {props.fields.map((val, i )=>{
                        // console.log(val, i)
                        return renderField(val, i)
                    })}
                    </div>
                    <div className='card-footer'>
                        {startButton()}
                    </div>
                </div>
            )
          break;
        case 'meeting':
            return(
                <div className = 'card' >
                    <div className='card-header'>
                        <h3>{props.tag}</h3>
                    </div>
                    <div className='card-body'>
                    {props.fields.map((val, i )=>{
                        // console.log(val, i)
                        return renderField(val, i)
                    })}
                    </div>
                    <div className='card-footer'>
                        {joinButton()}
                        {updateButton()}
                        {deleteButton()}
                    </div>
                </div>
            )
          break;
        default:
            return(
                <div className = 'card' >
                    <div className='card-header'>
                        <h3>{props.name}</h3>
                    </div>
                    <div className='card-body'>
                    {props.fields.map((val, i )=>{
                        // console.log(val, i)
                        return renderField(val, i)
                    })}
                    </div>
                    <div className='card-footer'>
                        {updateButton()}
                        {deleteButton()}
                    </div>
                </div>
            )
      }
      
   
}

export default Card

const renderField = (field, key) =>{
    const output = ()=>{
        switch(field.type){
            case "color":
                return <div style={{background:field.value, height:"1rem", width:"1rem"}}></div>
            default:
                return <span className = 'value'>{field.value}</span>
        }
    }
    return(
        <div className = 'field' key ={key}>
            <b className = 'label'>{field.label}</b>
            {output()}
        </div>
    )
}