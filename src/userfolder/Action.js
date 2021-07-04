import axios from 'axios';
import {FETCH_USER_REQUEST,
        FETCH_USER_SUCCESS,
        FETCH_USER_FALIUR} from './Actiontypes'

export const fetchuserRequest=()=>{
    return{
        type: FETCH_USER_REQUEST
    }
}
export const fetchuserSuccess=(users)=>{
    return{
        type: FETCH_USER_SUCCESS,
        payload:users
    }
}
export const fetchuserFaliur=(error)=>{
    return{
        type: FETCH_USER_FALIUR,
        payload:error
    }
}
export const fetchUsers=()=>{
    console.log("hello")
    return(dispatch)=>
    {
        dispatch(fetchuserRequest);
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
           const users=response.data
           console.log(response)
        dispatch(fetchuserSuccess(users)) 
         }).catch(error=>{
           const errormsg=error.message
           dispatch(fetchuserFaliur(errormsg))
       })   
          
    }
}

  
  
