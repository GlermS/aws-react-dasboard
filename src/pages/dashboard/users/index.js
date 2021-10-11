import {useState, useEffect, useContext } from 'react';
import axios from 'axios'
import {Auth}  from 'aws-amplify';
import Card from '../../../components/card';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import { deleteUser, listUsers, joinUser } from '../../../utils/users';
import moment from 'moment';
import './style.css';
import LoadingContext from '../../context';


function Users(props){
const [users, setUsers] = useState([])
const [update, setUpdate] = useState(true)
const [session, setSession] = useState({authToken:'', userId:''})
const {isLoading, setIsLoading} = useContext(LoadingContext)


const updateFunc = async()=>{
    await getToken()
    var response = await listUsers(session)
    if(response.status===200){
        const mts = response.data.map(element => {
            console.log(element)
            const {id, email, start, firstName:fname} = element
            return {
                userId: id,
                fname,
                email,
                start,
            }
        });
        if(users!==mts){
            setUsers(mts)
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
        <h2 >Available Calls</h2>
        <Link className='create-button' to='/users/create-user'>New user</Link>
    </div>
    <div className="my-calls-content">
        <div className = "calls-list">
            {
                users.map((user, i) =>{
                    let userId = user.userId
                    let startTime = moment(user.start)
                    console.log(user)
                    return (
                        <Card name = {user.fname} cardId = {userId} type='user' updatePath='/users/update-user' fields={[
                            {label: 'Email', value: user.email},
                            {label: 'Start', value: startTime.format("DD/MM/YYYY")},
                        ]
                        } key ={i} deleteFunc={async()=>{await deleteUser(session, {userId}); updateFunc()}} joinFunc={async ()=>{await joinUser(session, {userId}); updateFunc()}}></Card>
                    )
                })
            }
        </div>
         
    </div>         
    </div>
)
}

export default withRouter(Users)

  