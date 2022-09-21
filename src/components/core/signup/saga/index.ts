import {put,takeEvery} from "redux-saga/effects"
import {SIGNUP,SIGNUP_SUCCESS,SIGNUP_FAIL} from '../action/actionTypes'
import {serverPost} from "../../../server"
import axios from "axios"
import {API} from "../../../../config"
let baseUrl = "https://douban.uieee.com";

if (process.env.NODE_ENV === "development") {
    baseUrl = "http://localhost";
} else {
   // baseUrl = "http://localhost:3000";
}
// export const baseUrl = "http://localhost:3000";
let $axios = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    responseType: "json",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    }
});
function* handleSignup(action){
  try {
    yield axios.post(`api/request`)
    yield put(SIGNUP_SUCCESS())
  } catch (error) {
    yield put(SIGNUP_FAIL(error.response.data.error))
  }
}
export default function* signupSaga (){
     yield takeEvery(SIGNUP,handleSignup)
}