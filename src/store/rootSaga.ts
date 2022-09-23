import {all} from "redux-saga/effects"
import signupSaga from "../components/core/signup/saga"
import signinSaga from "../components/core/signin/saga"

export default function* rootSaga (){
    yield all([signupSaga(),signinSaga()])
}