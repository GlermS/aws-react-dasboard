import {useState, useEffect, useContext } from 'react';
import axios from 'axios'
import {Auth}  from 'aws-amplify';
import Card from '../../../components/card';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import { deleteMeeting, listMeetings, joinMeeting } from '../../../utils/meetings';
import moment from 'moment';
import './style.css';
import LoadingContext from '../../context';
import { listTags } from '../../../utils/tags';


function Meetings(props){
const [meetings, setMeetings] = useState([])
const [update, setUpdate] = useState(true)
const [session, setSession] = useState({authToken:'', userId:''})
const {isLoading, setIsLoading} = useContext(LoadingContext)
const [tags, setTags] = useState({})

const updateFunc = async()=>{
    await getToken()
    var response = await listMeetings(session)
    if(response.status===200){
        const mts = response.data.map(element => {
            const {id, subscribed_users, start, tag} = element
            return {
                meetingId: id,
                users: subscribed_users,
                start,
                tag
            }
        });
        if(meetings!==mts){
            setMeetings(mts)
        }
        
    }
    response = await listTags(session)
    console.log(response)
    if(response.status===200){
        const mts = response.data.map(element => {
            console.log(element)
            const {id, tag_color:color, tag_name:name} = element
            return {
                tagId: id,
                color,
                name
            }
        });
        var d = {}
        mts.forEach(element => {
            d = {...d, [element.tagId]: element}
        });

        if(tags!==d){            
            setTags(d)
        }
    }
    
}


async function getToken(){
    let sessionInfo = await Auth.currentSession()
        if(session.authToken !== sessionInfo.idToken.jwtToken){
        console.log('Update token')
        session.authToken = sessionInfo.idToken.jwtToken
        setSession(session)
        }
        return session
    }

useEffect(()=>{
    if(update){
        setIsLoading(true);
        updateFunc();
        setUpdate(false);
        setIsLoading(false)
    }
})

return(
    <div className="my-calls scroll section">
    <div className="subheader">
        <h2 >Available Calls</h2>
        <Link className='create-button' to='/meetings/create-meeting'>New meeting</Link>
    </div>
    <div className="my-calls-content">
        <div className = "calls-list">
            {
                meetings.map((meeting, i) =>{
                    let meetingId = meeting.meetingId
                    let startTime = moment(meeting.start)
                    console.log(meeting)
                    const tag = tags[meeting.tag]
                    let name = ''
                    let color = ''
                    if (tag) {
                        name=tag.name 
                        color=tag.color
                    }
                    console.log(color)
                    return (
                        <Card type='meeting' tag={name} color={color} cardId = {meetingId} updatePath='/meetings/update-meeting' fields={[
                            {label: 'Incriptions', value: meeting.users? meeting.users.length:0},
                            {label: 'Date', value: startTime.format("DD/MM/YYYY")},
                            {label: 'Start', value: startTime.format("h:mm")},
                        ]
                        } key ={i} deleteFunc={async()=>{await deleteMeeting(session, {meetingId}); updateFunc()}} joinFunc={async ()=>{await joinMeeting(session, {meetingId}); updateFunc()}}></Card>
                    )
                })
            }
        </div>
         
    </div>         
    </div>
)
}

export default withRouter(Meetings)

  