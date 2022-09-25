import {all} from "redux-saga/effects"
import signupSaga from "../components/app/signup/saga"
import signinSaga from "../components/app/signin/saga"

export default function* rootSaga (){
    yield all([signupSaga(),signinSaga()])
}