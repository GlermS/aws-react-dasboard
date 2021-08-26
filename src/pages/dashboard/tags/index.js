import {useState, useEffect, useContext } from 'react';
import axios from 'axios'
import {Auth}  from 'aws-amplify';
import Card from '../../../components/card';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import { deleteTag, listTags} from '../../../utils/tags';
import moment from 'moment';
import './style.css';
import LoadingContext from '../../context';


function Tags(props){
const [tags, setTags] = useState([])
const [update, setUpdate] = useState(true)
const [session, setSession] = useState({authToken:'', tagId:''})
const {isLoading, setIsLoading} = useContext(LoadingContext)

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
        <h2 >Available Tags</h2>
        <Link className='create-button' to='/tags/create-tag'>New tag</Link>
    </div>
    <div className="my-calls-content">
        <div className = "calls-list">
            {
                tags.map((tag, i) =>{
                    let tagId = tag.tagId
                    let startTime = moment(tag.start)
                    console.log(tag)
                    return (
                        <Card name = {tag.fname} cardId = {tagId} type='tag' updatePath='/tags/update-tag' fields={[
                            {label: 'Name', value: tag.name},
                            {label: 'Color', value: tag.color, type: "color"},
                        ]
                        } key ={i} deleteFunc={async()=>{await deleteTag(session, {tagId}); updateFunc()}}></Card>
                    )
                })
            }
        </div>
         
    </div>         
    </div>
)
}

export default withRouter(Tags)

  