import { useContext, useEffect, useState } from 'react'
import {postUser} from  '../../../utils/users'
import moment from 'moment'
import { listTags } from '../../../utils/tags'
import LoadingContext from '../../context'

function CreateUserForm(props){
    const [tag, setTag] = useState('presentation')
    const [start, setStart] = useState(moment().format('YYYY-MM-DDTh:mm:ss'))
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
                    <span>Tag:</span>
                    <select name="tag" id="tags" onChange={(e)=>{setTag(e.target.value)}} value={tag}>
                        {opionsList()}
                    </select>
                </label>
                <label>
                    <span>Start</span>
                    <input type='datetime-local' value={start} onChange={(e)=>{setStart(e.target.value)}}></input>
                </label>
                <button type="submit" onClick={(e)=>{e.preventDefault();postUser(props.session, {tag, start})}}>Enviar</button>
            </form>
        </div>);
}



export default CreateUserForm;

  

