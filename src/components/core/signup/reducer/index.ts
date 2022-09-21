import { handleActions } from 'redux-actions';
import { SIGNUP,SIGNUP_SUCCESS,SIGNUP_FAIL } from '../action/actionTypes'
const actions={
       SIGNUP:(state, action)=>{
            return {
               ...state,
               signup:{
                    loaded:false,
                    success:false
               }
            }
       },
       SIGNUP_SUCCESS:(state, action)=>{
            return {
               ...state,
               signup:{
                    loaded:true,
                    success:true
               }
            }},
       SIGNUP_FAIL:(state, action)=>{
              return {
                 ...state,
                 signup:{
                      loaded:true,
                      success:false
                 }
              }}
}