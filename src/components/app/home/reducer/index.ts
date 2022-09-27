import { handleActions } from 'redux-actions';
import actionTypes from "@/src/components/app/home/action/actionTypes"
const actions={
       [actionTypes.GET_PRODUCTIONS]:(state:any, action:any)=>{
            console.log(action)
            return {
               ...state,
               [action.payload.sortBy]:{
                     ...state[action.payload.sortBy],
                    loaded:false,
                    success:false
               }
            }
       },
       [actionTypes.GET_PRODUCTIONS_SUCCESS]:(state:any, action:any)=>{

            return {
               ...state,
               [action.payload.sortBy]:{
                     ...state[action.payload.sortBy],
                    loaded:true,
                    success:true,
                    products:action.payload.data
               }
            }},
}
const initSate={}
export default handleActions(actions,initSate);