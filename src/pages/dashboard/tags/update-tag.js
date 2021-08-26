import { useEffect, useState } from 'react'
import {getTag, updateTag} from  '../../../utils/tags'
import {useLocation} from "react-router-dom";
import moment from 'moment'

function UpdateTagForm(props){
    const [name, setName] = useState('')
    const [color, setColor] = useState('#CCCCCC')
    const tagId = useQuery().get('id')

    useEffect(()=>{
        getTag(props.session, {tagId}).then((response)=>{
            console.log(response.data)
            if(response.data.tag_name){
                setName(response.data.tag_name)
            }
            if(response.data.tag_color){
                setColor(response.data.tag_color)
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
            <h1>Update a tag</h1>
            <form className ="create-form" >
                <label>
                    <span>Name</span>
                    <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                </label>
                <label>
                    <span>Color</span>
                    <input type='color' value={color} onChange={(e)=>{setColor(e.target.value)}}></input>
                </label>
                {/* <label>
                    <span>Email</span> */}
                    {/* <input type='text' value={tag} onChange={(e)=>{setTag(e.target.value)}}></input> */}
                {/* </label>
                <label>
                    <span>Start</span> */}
                    {/* <input type='datetime-local' value={start} onChange={(e)=>{setStart(e.target.value)}}></input> */}
                {/* </label> */}
                <button type="submit" onClick={(e)=>{e.preventDefault();updateTag(props.session, {tagId, tagName:name, tagColor:color})}}>Enviar</button>
            </form>
        </div>);
}



export default UpdateTagForm;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}  

