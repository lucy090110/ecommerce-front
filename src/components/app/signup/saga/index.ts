import {put,takeEvery} from "redux-saga/effects"
import actions from '@/src/components/app/signup/action/actionCreator'
import actionTypes from '@/src/components/app/signup/action/actionTypes'
import axios from "axios"
import {API} from "@/src/config"
function* handleSignup(action:any){
  try {
    yield axios.post(`${API}/signup`, action.payload)
    console.log(actions)
    yield put(actions.signupSuccess())
  } catch (error) {
    yield put(actions.signupFail({message:error.response.data.error}))
  }
}
export default function* signupSaga (){
     yield takeEvery(actionTypes.SIGNUP,handleSignup)
}