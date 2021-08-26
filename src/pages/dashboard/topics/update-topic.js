import { useEffect, useState } from 'react'
import {getTopic, updateTopic} from  '../../../utils/topics'
import {useLocation} from "react-router-dom";
import moment from 'moment'

function UpdateTopicForm(props){
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [tag, setTag] = useState('')
    const [start, setStart] = useState(moment().format('YYYY-MM-DDTh:mm:ss'))
    const topicId = useQuery().get('id')

    useEffect(()=>{
        getTopic(props.session, {topicId}).then((response)=>{
            console.log(response.data)
            if(response.data.topic_name){
                setName(response.data.topic_name)
            }
            if(response.data.topic_description){
                setDescription(response.data.topic_description)
            }
            if(response.data.tag_id){
                setTag(response.data.tag_id)
            }
        }).catch((error)=>{
            console.log(error)
        });
        
    }, [])
    // console.log(tag)
    // console.log(start)
    // console.log(id)

    return(
        <div className="create">
            <h1>Update a topic</h1>
            <form className ="create-form" >
                <label>
                    <span>Name</span>
                    <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                </label>
                <label>
                    <span>Description</span>
                    <input type='text' value={description} onChange={(e)=>{setDescription(e.target.value)}}></input>
                </label>
                {/* <label>
                    <span>Email</span> */}
                    {/* <input type='text' value={tag} onChange={(e)=>{setTag(e.target.value)}}></input> */}
                {/* </label>
                <label>
                    <span>Start</span> */}
                    {/* <input type='datetime-local' value={start} onChange={(e)=>{setStart(e.target.value)}}></input> */}
                {/* </label> */}
                <button type="submit" onClick={(e)=>{e.preventDefault();updateTopic(props.session, {topicId, topicName:name, topicDescription:description})}}>Enviar</button>
            </form>
        </div>);
}



export default UpdateTopicForm;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}  

