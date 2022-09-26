import { handleActions } from 'redux-actions';
import actionTypes from "@/src/components/app/dashboard/action/actionTypes"

const actions={
     [actionTypes.GET_CATEGORY]:(state:any, action:any)=>{
             return {
                ...state,
                 loaded:false,
                 success:false,
                 data:null
             }
        },
        [actionTypes.GET_CATEGORY_SUCCESS]:(state:any, action:any)=>{
             return {
                ...state,
                 loaded:true,
                 success:true,
                 data:action.payload
             }}
}
const initSate={
   loaded:false,
   success:true,
   data:null
}
export default handleActions(actions,initSate);