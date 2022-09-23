import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import signupReducer from "@/src/components/core/signup/reducer"
import signinReducer from "@/src/components/core/signin/reducer"
import {History} from 'history';

const createRootReducer=(history:History)=>combineReducers({
    router:connectRouter(history),
    signup:signupReducer,
    signin:signinReducer
})

export default createRootReducer;