import {useState, useEffect, useContext } from 'react';
import axios from 'axios'
import {Auth}  from 'aws-amplify';
import Card from '../../../components/card';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import { deleteTopic, listTopics, joinTopic } from '../../../utils/topics';
import moment from 'moment';
import './style.css';
import LoadingContext from '../../context';


function Topics(props){
const [topics, setTopics] = useState([])
const [update, setUpdate] = useState(true)
const [session, setSession] = useState({authToken:'', topicId:''})
const {isLoading, setIsLoading} = useContext(LoadingContext)

const updateFunc = async()=>{
    await getToken()
    const response = await listTopics(session)
    if(response.status===200){
        const mts = response.data.map(element => {
            console.log(element)
            const {id, topic_description:description, topic_name:name} = element
            return {
                topicId: id,
                description,
                name
            }
        });
        if(topics!==mts){
            setTopics(mts)
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
        <h2 >Available Topics</h2>
        <Link className='create-button' to='/topics/create-topic'>New topic</Link>
    </div>
    <div className="my-calls-content">
        <div className = "calls-list">
            {
                topics.map((topic, i) =>{
                    let topicId = topic.topicId
                    let startTime = moment(topic.start)
                    console.log(topic)
                    return (
                        <Card name = {topic.fname} cardId = {topicId} type='topic' updatePath='/topics/update-topic' fields={[
                            {label: 'Name', value: topic.name},
                            {label: 'Description', value: topic.description},
                        ]
                        } key ={i} deleteFunc={async()=>{await deleteTopic(session, {topicId}); updateFunc()}} joinFunc={async ()=>{await joinTopic(session, {topicId}); updateFunc()}}></Card>
                    )
                })
            }
        </div>
         
    </div>         
    </div>
)
}

export default withRouter(Topics)

  