import axios from 'axios'

export async function postTopic(session, data){
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/topics/topic',
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
  export async function joinTopic(session, params){
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/topics/subscribe',
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

export async function updateTopic(session, data){
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/topics/topic',
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

  export async function deleteTopic(session, params){
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/topics/topic',
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

  export async function listTopics(session){
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/topics',
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

  export async function getTopic(session, params){
    // console.log(session.authToken)
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/topics/topic',
      method: 'get',
      crossDomain: true,
      headers: {
            'Authorization': session.authToken
         },
      params
      }).then((response) => {
        // console.log(response)
        return {data: response.data.Item, status: response.status}
  
    }).catch(error =>{
      return {msg:error, status:401}
    })
  }