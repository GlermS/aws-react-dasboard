// import React from 'react'
import { withCookies, CookiesProvider} from 'react-cookie';
// import CallsList from './calls/calls-list';
import {Switch, Route,withRouter} from 'react-router-dom'
import Meetings from './meetings';
import Users from './users';
import Topics from './topics';
import Tags from './tags';
// import Users from './users';
// import CreateCall from './calls/createCall';
// import RegisterUser from './users/register-user';
// import CreateForm from '../../components/createForm';
// import ListThemes from './themes/list-themes';
import { withAuthenticator } from '@aws-amplify/ui-react';
import CreateMeetingForm from './meetings/create-meetings';
import {Auth}  from 'aws-amplify';
import {useEffect, useState} from 'react';
import UpdateMeetingForm from './meetings/update-meetings';
import CreateUserForm from './users/create-users';
import UpdateUserForm from './users/update-users';
import CreateTopicForm from './topics/create-topic';
import UpdateTopicForm from './topics/update-topic';
import CreateTagForm from './tags/create-tag';
import UpdateTagForm from './tags/update-tag';



function Dashboard(props){
    const [session, setSession] = useState({authToken:'', userId:''});

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
        getToken()
    },[session])

    return (
        <Switch>
            

            <Route path="/profile">
            <CookiesProvider>
            </CookiesProvider>
            </Route>

            <Route path="/meetings">
                <Switch>
                    <Route path="/meetings/create-meeting">
                        <CreateMeetingForm session={session}></CreateMeetingForm>
                    </Route>

                    <Route path="/meetings/update-meeting">
                        <UpdateMeetingForm session={session}></UpdateMeetingForm>
                    </Route>

                    <Route path="/meetings">
                        <Meetings  getToken={async ()=> await getToken()}/>
                    </Route>
                </Switch>
            </Route>

            <Route path="/users">
                <Switch>
                    <Route path="/users/create-user">
                        <CreateUserForm session={session}></CreateUserForm>
                    </Route>

                    <Route path="/users/update-user">
                        <UpdateUserForm session={session}></UpdateUserForm>
                    </Route>

                    <Route path="/users">
                        <Users  getToken={async ()=> await getToken()}/>
                    </Route>
                </Switch>
            </Route>

            <Route path="/topics">
                <Switch>
                    <Route path="/topics/create-topic">
                        <CreateTopicForm session={session}></CreateTopicForm>
                    </Route>

                    <Route path="/topics/update-topic">
                        <UpdateTopicForm session={session}></UpdateTopicForm>
                    </Route>

                    <Route path="/topics">
                        <Topics  getToken={async ()=> await getToken()}/>
                    </Route>
                </Switch>
            </Route>
            
            <Route path="/tags">
                <Switch>
                    <Route path="/tags/create-tag">
                        <CreateTagForm session={session}></CreateTagForm>
                    </Route>

                    <Route path="/tags/update-tag">
                        <UpdateTagForm session={session}></UpdateTagForm>
                    </Route>

                    <Route path="/tags">
                        <Tags  getToken={async ()=> await getToken()}/>
                    </Route>
                </Switch>
            </Route>
            
            <Route path="/">
            <CookiesProvider>
                <Meetings getToken={async ()=> await getToken()} />
            </CookiesProvider>
            </Route>
        </Switch>)
    
}

export default withAuthenticator(withRouter(withCookies(Dashboard)))