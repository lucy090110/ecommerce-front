import { handleActions } from 'redux-actions';
import actionTypes from "@/src/components/core/signup/action/actionTypes"
const actions={
       [actionTypes.SIGNUP]:(state, action)=>{
            return {
               ...state,
                loaded:false,
                success:false
            }
       },
       [actionTypes.SIGNUP_SUCCESS]:(state, action)=>{
            return {
               ...state,
                loaded:true,
                success:true
            }},
       [actionTypes.SIGNUP_FAIL]:(state, action)=>{
              return {
                 ...state,
                 message:action.payload.message,
                  loaded:true,
                  success:false
              }},
       [actionTypes.SIGNUP_RESET]:(state, action)=>{
              return {
                 ...state,
                 message:'',
                  loaded:false,
                  success:false
              }}
}
const initSate={
   loaded:false,
   success:false,
   message:""
}
export default handleActions(actions,initSate);