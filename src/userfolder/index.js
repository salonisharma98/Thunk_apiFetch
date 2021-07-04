import {combineReducers} from 'redux';
import UserReducer from './UserReducer.js';
const Reducer=combineReducers({
    user:UserReducer,
})
export default Reducer;