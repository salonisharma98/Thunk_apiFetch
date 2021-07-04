import {FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FALIUR} from './Actiontypes.js'

const initialstate={
    loading:false,
    users:[],
    error:''
}
const UserReducer=(state=initialstate, action)=>
{
    switch(action.type)
    {
        case FETCH_USER_REQUEST:
           return{
               ...state,
               loading:true
           }
           case FETCH_USER_SUCCESS:
            return{
                loading:false,
                users:action.payload,
               error:''
            }
            case FETCH_USER_FALIUR:
                return{
                    
                    loading:false,
                    users:[],
                    error:action.payload
                }
                default:
                    return state
    }
}
export default UserReducer;