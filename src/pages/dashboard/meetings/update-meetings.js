import { useEffect, useState } from 'react'
import {getMeeting, updateMeeting} from  '../../../utils/meetings'
import {useLocation} from "react-router-dom";
import moment from 'moment'

function UpdateMeetingForm(props){
    const [tag, setTag] = useState('presentation')
    const [start, setStart] = useState(moment().format('YYYY-MM-DDTh:mm:ss'))
    const meetingId = useQuery().get('id')

    useEffect(()=>{
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
                        <option value="test">test</option>
                        <option value="sport">sport</option>
                        <option value="presentation">presentation</option>
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

