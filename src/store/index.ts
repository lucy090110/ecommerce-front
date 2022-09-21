import {applyMiddleware, createStore} from "redux";
import {createHashHistory} from 'history';
import {routerMiddleware,RouterState} from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension"
import createRootReducer from "./reducers"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./rootSaga"

export const history=createHashHistory();
const sagaMiddleware=createSagaMiddleware();
export interface AppState{
    router:RouterState
}

const store=createStore(createRootReducer(history),composeWithDevTools(applyMiddleware(routerMiddleware(history),sagaMiddleware)))
sagaMiddleware.run(rootSaga);
export  default  store;