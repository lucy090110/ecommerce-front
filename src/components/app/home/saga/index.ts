import {put,takeEvery} from "redux-saga/effects"
import actions from '@/src/components/app/home/action/actionCreator'
import actionTypes from '@/src/components/app/home/action/actionTypes'
import axios from "axios"
import {API} from "@/src/config"
function* handleGetProductions(action){
    const{ sortBy, order, limit }=action.payload
    let response=yield axios.get(`${API}/products`, {params:{sortBy, order, limit}})
    console.log(actions)
    yield put(actions.getProductionsSuccess({data:response.data,sortBy}))
}
export default function* signupSaga (){
     yield takeEvery(actionTypes.GET_PRODUCTIONS,handleGetProductions)
}