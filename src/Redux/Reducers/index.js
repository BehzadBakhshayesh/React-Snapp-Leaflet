import {combineReducers } from 'redux'
import { phoneNumberReducer } from './phoneNumberReducer';
import { verifyCodeReducer } from './verifyCodeReducer';


export default combineReducers({
    phoneNumberReducer,
    verifyCodeReducer
})