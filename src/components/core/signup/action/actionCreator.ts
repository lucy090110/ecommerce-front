import {createActions} from 'redux-actions';
import {SIGNUP,SIGNUP_SUCCESS,SIGNUP_FAIL,SignupAction,SignupSuccessAction,SignupFailAction,SignupPayload} from './actionTypes'

export default createActions({
       SIGNUP:(payload:SignupPayload):SignupAction=>payload,
       SIGNUP_SUCCESS:():SignupSuccessAction=>{},
       SIGNUP_FAIL:(message:string):SignupFailAction=>message
})
