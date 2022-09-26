import {all} from "redux-saga/effects"
import signupSaga from "@/src/components/app/signup/saga"
import signinSaga from "@/src/components/app/signin/saga"
import dashboardSaga from "@/src/components/app/dashboard/saga"

export default function* rootSaga (){
    yield all([signupSaga(),signinSaga(),dashboardSaga()])
}