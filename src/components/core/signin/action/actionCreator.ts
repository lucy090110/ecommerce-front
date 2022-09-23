import {createActions} from 'redux-actions';
import actionTypes from '@/src/components/core/signin/action/actionTypes'

export default createActions({
       [actionTypes.SIGNIN]:(payload)=>payload,
       [actionTypes.SIGNIN_SUCCESS]:()=>{},
       [actionTypes.SIGNIN_FAIL]:(message)=>message,
       [actionTypes.SIGNIN_RESET]:()=>{}
})
