import React from 'react';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom';
import App from "@/src/components/app/container";
const Routes = () => {

    return (
        <HashRouter>
            <Switch>
                <Route path={"/app"} component={App}></Route>
                <Redirect to="/app/home" />
            </Switch>
        </HashRouter>
    );
};

export default Routes;