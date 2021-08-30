import { useContext, useEffect, useState } from 'react'
import {postTag} from  '../../../utils/tags'
import moment from 'moment'
import { listTags } from '../../../utils/tags'
import LoadingContext from '../../context'

function CreateTagForm(props){
    const [name, setName] = useState('')
    const [color, setColor] = useState('#CCCCCC')
    const {setIsLoading} = useContext(LoadingContext)
    // useEffect(()=>{
    //     setIsLoading(true)
    //     listTags(props.session).then((response)=>{
    //         setTagsList(response.data)
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    //     setIsLoading(false)
    // },[])

    return(
        <div className="create">
            <h1>Create a new call</h1>
            <form className ="create-form" >
                <label>
                    <span>Name</span>
                    <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                </label>
                <label>
                    <span>Color</span>
                    <input type='color' value={color} onChange={(e)=>{setColor(e.target.value)}}></input>
                </label>
                <button type="submit" onClick={(e)=>{e.preventDefault();postTag(props.session, {tagName:name, tagColor:color})}}>Enviar</button>
            </form>
        </div>);
}



export default CreateTagForm;

  

