import { handleActions } from 'redux-actions';
import actionTypes from "@/src/components/app/signin/action/actionTypes"

const actions={
       [actionTypes.SIGNIN]:(state:any, action:any)=>{
            return {
               ...state,
                loaded:false,
                success:false
            }
       },
       [actionTypes.SIGNIN_SUCCESS]:(state:any, action:any)=>{
            return {
               ...state,
                loaded:true,
                success:true
            }},
       [actionTypes.SIGNIN_FAIL]:(state:any, action:any)=>{
              return {
                 ...state,
                 message:action.payload.message,
                  loaded:true,
                  success:false
              }},
       [actionTypes.SIGNIN_RESET]:(state:any, action:any)=>{
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