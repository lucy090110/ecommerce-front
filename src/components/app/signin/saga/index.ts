import {put,takeEvery} from "redux-saga/effects"
import actions from '@/src/components/app/signin/action/actionCreator'
import actionTypes from '@/src/components/app/signin/action/actionTypes'
import appActions from "@/src/components/app/action/actionCreator";
import axios from "axios"
import {API} from "@/src/config"
function* handleSignin(action:any){
console.log(appActions)
  try {
    let response=yield axios.post(`${API}/signin`, action.payload)
    localStorage.setItem('auth',JSON.stringify(response.data))
    yield put(actions.signinSuccess())
    yield put(appActions.getAuth())
  } catch (error) {
    yield put(actions.signinFail({message:error.response.data.error}))
  }
}
export default function* signupSaga (){
     yield takeEvery(actionTypes.SIGNIN,handleSignin)
}