import axios from 'axios'

export async function postMeeting(session, data){
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/meetings/meeting',
      method: 'post',
      crossDomain: true,
      headers: {
            'Authorization': session.authToken
         },
      data
      }).then((response) => {
        // console.log(response)
        return {data: response.data, status: response.status}
  
    }).catch(error =>{
      return {msg:error, status:401}
    })
  }
  export async function joinMeeting(session, params){
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/meetings/subscribe',
      method: 'post',
      crossDomain: true,
      headers: {
            'Authorization': session.authToken
         },
      params
      }).then((response) => {
        // console.log(response)
        return {data: response.data, status: response.status}
  
    }).catch(error =>{
      return {msg:error, status:401}
    })
  }

export async function updateMeeting(session, data){
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/meetings/meeting',
      method: 'put',
      crossDomain: true,
      headers: {
            'Authorization': session.authToken
         },
      data
      }).then((response) => {
        // console.log(response)
        return {data: response.data, status: response.status}
  
    }).catch(error =>{
      return {msg:error, status:401}
    })
  }

  export async function deleteMeeting(session, params){
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/meetings/meeting',
      method: 'delete',
      crossDomain: true,
      headers: {
            'Authorization': session.authToken
         },
      params
      }).then((response) => {
        // console.log(response)
        return {data: response.data, status: response.status}
  
    }).catch(error =>{
      return {msg:error, status:401}
    })
  }

  export async function listMeetings(session){
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/meetings',
      method: 'get',
      crossDomain: true,
      headers: {
            'Authorization': session.authToken
         }
      }).then((response) => {
        // console.log(response)
        return {data: response.data, status: response.status}
  
    }).catch(error =>{
      return {msg:error, status:401}
    })
  }

  export async function listMyMeetings(session){
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/meetings/my_meetings',
      method: 'get',
      crossDomain: true,
      headers: {
            'Authorization': session.authToken
         }
      }).then((response) => {
        // console.log(response)
        return {data: response.data, status: response.status}
  
    }).catch(error =>{
      return {msg:error, status:401}
    })
  }
  export async function getMeeting(session, params){
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/meetings/meeting',
      method: 'get',
      crossDomain: true,
      headers: {
            'Authorization': session.authToken
         },
      params
      }).then((response) => {
        console.log(response)
        return {data: response.data.Item, status: response.status}
  
    }).catch(error =>{
      return {msg:error, status:401}
    })
  }