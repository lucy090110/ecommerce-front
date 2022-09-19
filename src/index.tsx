import React from 'react';
import ReactDOM from 'react-dom';
import {API} from './config';
import Routes from "./Routes";
import {Provider} from "react-redux";
import store,{history} from "./store";
import {ConnectedRouter} from "connected-react-router";
const ConnectedR:any=ConnectedRouter;
console.log(API)
ReactDOM.render(
    <Provider store={store}>
        <ConnectedR history={history}>
            <>
                <Routes/>
            </>
        </ConnectedR>
    </Provider>,
    document.getElementById("root")
)
