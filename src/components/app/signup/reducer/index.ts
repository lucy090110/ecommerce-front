import { handleActions } from 'redux-actions';
import actionTypes from "@/src/components/app/signup/action/actionTypes"
const actions={
       [actionTypes.SIGNUP]:(state:any, action:any)=>{
            return {
               ...state,
                loaded:false,
                success:false
            }
       },
       [actionTypes.SIGNUP_SUCCESS]:(state:any, action:any)=>{
            return {
               ...state,
                loaded:true,
                success:true
            }},
       [actionTypes.SIGNUP_FAIL]:(state:any, action:any)=>{
              return {
                 ...state,
                 message:action.payload.message,
                  loaded:true,
                  success:false
              }},
       [actionTypes.SIGNUP_RESET]:(state:any, action:any)=>{
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