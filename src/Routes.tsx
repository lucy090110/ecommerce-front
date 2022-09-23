import React from 'react';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom';
import Home from "./components/core/home";
import Shop from "./components/core/shop";
import Signup from "./components/core/signup/container";
import Signin from "./components/core/signin/container";
import Dashboard from "@/src/components/core/dashboard/container";

const Routes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path={'/home'} component={Home}/>
                <Route path={'/shop'} component={Shop} />
                <Route path={'/signup'} component={Signup} />
                <Route path={'/signin'} component={Signin} />
                <Route path={'/dashboard'} component={Dashboard} />
                <Redirect to="/home" />
            </Switch>
        </HashRouter>
    );
};

Routes.propTypes = {

};

export default Routes;