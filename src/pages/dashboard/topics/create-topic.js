import { useContext, useEffect, useState } from 'react'
import {postTopic} from  '../../../utils/topics'
import moment from 'moment'
import { listTags } from '../../../utils/tags'
import LoadingContext from '../../context'

function CreateTopicForm(props){
    const [tag, setTag] = useState('presentation')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [tagsList, setTagsList] = useState([])
    const {setIsLoading} = useContext(LoadingContext)
    useEffect(()=>{
        setIsLoading(true)
        listTags(props.session).then((response)=>{
            setTagsList(response.data)
        }).catch((error)=>{
            console.log(error)
        })
        setIsLoading(false)
    },[])
    const opionsList = ()=>{
        return tagsList.map((tag)=>{
            console.log(tag);
            return <option value={tag.id}>{tag.tag_name}</option>
        })
    }
    return(
        <div className="create">
            <h1>Create a new call</h1>
            <form className ="create-form" >
                <label>
                    <span>Name</span>
                    <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                </label>
                <label>
                    <span>Description</span>
                    <input type='text' value={description} onChange={(e)=>{setDescription(e.target.value)}}></input>
                </label>
                <label>
                    <span>Tag:</span>
                    <select name="tag" id="tags" onChange={(e)=>{setTag(e.target.value)}} value={tag}>
                        {opionsList()}
                    </select>
                </label>
                
                <button type="submit" onClick={(e)=>{e.preventDefault();postTopic(props.session, {tagId:tag, topicName:name, topicDescription:description})}}>Enviar</button>
            </form>
        </div>);
}



export default CreateTopicForm;

  

