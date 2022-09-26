import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import signupReducer from "@/src/components/app/signup/reducer"
import signinReducer from "@/src/components/app/signin/reducer"
import appReducer from "@/src/components/app/reducer"
import dashboardReducer from "@/src/components/app/dashboard/reducer"
import {History} from 'history';

const createRootReducer=(history:History)=>combineReducers({
    router:connectRouter(history),
    signup:signupReducer,
    signin:signinReducer,
    app:appReducer,
    dashboard:dashboardReducer
})

export default createRootReducer;