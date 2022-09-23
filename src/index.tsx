import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./Routes";
import {Provider} from "react-redux";
import store,{history} from "./store";
import {ConnectedRouter} from "connected-react-router";
import './style.css'

const ConnectedR:any=ConnectedRouter;
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
