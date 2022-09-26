import {put,takeEvery} from "redux-saga/effects"
import actions from '@/src/components/app/dashboard/action/actionCreator'
import actionTypes from '@/src/components/app/dashboard/action/actionTypes'
import axios from "axios"
import {API} from "@/src/config"
function* handleGetCategory(action:any){
    let response=yield axios.get(`${API}/categories`)
    yield put(actions.getCategorySuccess(response.data))
}
export default function* signupSaga (){
     yield takeEvery(actionTypes.GET_CATEGORY,handleGetCategory)
}