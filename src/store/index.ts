import {applyMiddleware, createStore} from "redux";
import {createHashHistory} from 'history';
import {routerMiddleware} from "connected-react-router";
import createRootReducer from "./reducers"
export const history=createHashHistory();

const store=createStore(createRootReducer(history),applyMiddleware(routerMiddleware(history)))

export  default  store;