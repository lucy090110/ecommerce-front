import { handleActions } from 'redux-actions';
import actionTypes from "@/src/components/core/signin/action/actionTypes"

const actions={
       [actionTypes.SIGNIN]:(state, action)=>{
            return {
               ...state,
                loaded:false,
                success:false
            }
       },
       [actionTypes.SIGNIN_SUCCESS]:(state, action)=>{
            return {
               ...state,
                loaded:true,
                success:true
            }},
       [actionTypes.SIGNIN_FAIL]:(state, action)=>{
              return {
                 ...state,
                 message:action.payload.message,
                  loaded:true,
                  success:false
              }},
       [actionTypes.SIGNIN_RESET]:(state, action)=>{
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