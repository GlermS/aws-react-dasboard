import axios from 'axios'

export async function postTag(session, data){
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/tags/tag',
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
  export async function joinTag(session, params){
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/tags/subscribe',
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

export async function updateTag(session, data){
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/tags/tag',
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

  export async function deleteTag(session, params){
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/tags/tag',
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

  export async function listTags(session){
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/tags',
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

  export async function getTag(session, params){
    // console.log(session.authToken)
    return await axios({
      url:process.env.REACT_APP_BACKEND_URI+'/tags/tag',
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