import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "@/src/routes";
import {Provider} from "react-redux";
import store,{history} from "./store";
import {ConnectedRouter} from "connected-react-router";
import '@/src/style.css'
import 'antd/dist/antd.css';

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
