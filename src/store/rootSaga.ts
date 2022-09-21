import {all} from "redux-saga/effects"
import signupSaga from "../components/core/signup/saga"

export default function* rootSaga (){
    yield all([signupSaga()])
}