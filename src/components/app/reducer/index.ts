import { handleActions } from 'redux-actions';
import actionTypes from "@/src/components/app/action/actionTypes"

const actions={
       [actionTypes.GETAUTH]:(state:any, action:any)=>{
           let auth:any=localStorage.getItem('auth')
           if(auth){
               auth=JSON.parse(<string>localStorage.getItem('auth'))
           }
            return {
               ...state,
                auth
            }
       }
}
const initSate={
   auth:null
}
export default handleActions(actions,initSate);