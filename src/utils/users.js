import axios from 'axios'

export async function postUser(session, data){
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/users/user',
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
  export async function joinUser(session, params){
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/users/subscribe',
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

export async function updateUser(session, data){
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/users/user',
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

  export async function deleteUser(session, params){
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/users/user',
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

  export async function listUsers(session){
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/users',
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

  export async function getUser(session, params){
    // console.log(session.authToken)
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/users/user',
      method: 'get',
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