import { useEffect, useState } from 'react'
import {getUser, updateUser} from  '../../../utils/users'
import {useLocation} from "react-router-dom";
import moment from 'moment'

function UpdateUserForm(props){
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [start, setStart] = useState(moment().format('YYYY-MM-DDTh:mm:ss'))
    const userId = useQuery().get('id')

    useEffect(()=>{
        getUser(props.session, {userId}).then((response)=>{
            console.log(response.data)
            if(response.data.first_name){
                setFname(response.data.first_name)
            }
            if(response.data.last_name){
                setLname(response.data.last_name)
            }
            if(response.data.email){
                setEmail(response.data.email)
            }
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
            <h1>Update a user</h1>
            <form className ="create-form" >
                <label>
                    <span>First Name</span>
                    <input type='text' value={fname} onChange={(e)=>{setFname(e.target.value)}}></input>
                </label>
                <label>
                    <span>Last Name</span>
                    <input type='text' value={lname} onChange={(e)=>{setLname(e.target.value)}}></input>
                </label>
                <label>
                    {/* <span>Email</span> */}
                    {/* <input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input> */}
                </label>

                <button type="submit" onClick={(e)=>{e.preventDefault();updateUser(props.session, {userId, first_name:fname, last_name:lname})}}>Enviar</button>
            </form>
        </div>);
}



export default UpdateUserForm;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}  

