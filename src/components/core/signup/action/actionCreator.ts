import {createActions} from 'redux-actions';
import actionTypes from './actionTypes'

export default createActions({
       [actionTypes.SIGNUP]:(payload)=>payload,
       [actionTypes.SIGNUP_SUCCESS]:()=>{},
       [actionTypes.SIGNUP_FAIL]:(message)=>message,
       [actionTypes.SIGNUP_RESET]:()=>{}
})
