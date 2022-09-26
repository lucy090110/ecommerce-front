import { handleActions } from 'redux-actions';
import actionTypes from "@/src/components/app/action/actionTypes"

const actions={
       [actionTypes.GET_AUTH]:(state:any, action:any)=>{
           let auth:any=localStorage.getItem('auth')
           if(auth){
               auth=JSON.parse(localStorage.getItem('auth') as string)
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