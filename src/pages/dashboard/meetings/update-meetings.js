import { useEffect, useState, useContext } from 'react'
import {getMeeting, updateMeeting} from  '../../../utils/meetings'
import {useLocation} from "react-router-dom";
import moment from 'moment'
import { listTags } from '../../../utils/tags';
import {Auth}  from 'aws-amplify';
import LoadingContext from '../../context';


function UpdateMeetingForm(props){
    const [tag, setTag] = useState('')
    const [start, setStart] = useState(moment().format('YYYY-MM-DDTh:mm:ss'))
    const meetingId = useQuery().get('id')
    const [update, setUpdate] = useState(true)
    const {isLoading, setIsLoading} = useContext(LoadingContext)

    const [tags, setTags] = useState([])

    const [session, setSession] = useState({authToken:'', userId:''})

    async function getToken(){
        let sessionInfo = await Auth.currentSession()
            if(session.authToken !== sessionInfo.idToken.jwtToken){
            console.log('Update token')
            session.authToken = sessionInfo.idToken.jwtToken
            setSession(session)
            }
            return session
        }
    const updateFunc = async()=>{
        await getToken()
        const response = await listTags(session)
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
            if(tags!==mts){            
                setTags(mts)
            }
        }
        
    }

    useEffect(()=>{
        if(update){
            setIsLoading(true);
            updateFunc();
            setUpdate(false);
            setIsLoading(false)
        }
        getMeeting(props.session, {meetingId}).then((response)=>{
            console.log(response.data)
            setTag(response.data.tag);
            setStart(response.data.start);
        }).catch((error)=>{
            console.log(error)
        });
        
    }, [])
    // console.log(tag)
    // console.log(start)
    // console.log(id)

    return(
        <div className="create">
            <h1>Update a new call</h1>
            <form className ="create-form" >
                <label>
                    <span>Tag:</span>
                    <select name="tag" id="tags" onChange={(e)=>{setTag(e.target.value)}} value={tag}>
                        {tags.map((t) =>{
                                return <option value={t.tagId}>{t.name}</option>
                        })}
                    </select>
                </label>
                <label>
                    <span>Start</span>
                    <input type='datetime-local' value={start} onChange={(e)=>{setStart(e.target.value)}}></input>
                </label>
                <button type="submit" onClick={(e)=>{e.preventDefault();updateMeeting(props.session, {meetingId, tag, start})}}>Enviar</button>
            </form>
        </div>);
}



export default UpdateMeetingForm;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}  

