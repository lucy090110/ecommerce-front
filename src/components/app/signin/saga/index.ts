import {put,takeEvery} from "redux-saga/effects"
import actions from '@/src/components/app/signin/action/actionCreator'
import actionTypes from '@/src/components/app/signin/action/actionTypes'
import axios from "axios"
import {API} from "@/src/config"
function* handleSignin(action:any){
  try {
    let response=yield axios.post(`${API}/signin`, action.payload)
    localStorage.setItem('auth',JSON.stringify(response.data))
    yield put(actions.signinSuccess())
  } catch (error) {
    yield put(actions.signinFail({message:error.response.data.error}))
  }
}
export default function* signupSaga (){
     yield takeEvery(actionTypes.SIGNIN,handleSignin)
}