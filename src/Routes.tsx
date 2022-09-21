import React from 'react';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from "./components/core/home";
import Shop from "./components/core/shop";
import Signup from "./components/core/signup/container";
import Signin from "./components/core/signin";

const Routes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path={'/home'} component={Home}/>
                <Route path={'/shop'} component={Shop} />
                <Route path={'/signup'} component={Signup} />
                <Route path={'/signin'} component={Signin} />
                <Redirect to="/home" />
            </Switch>
        </HashRouter>
    );
};

Routes.propTypes = {

};

export default Routes;