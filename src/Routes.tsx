import React from 'react';
import {HashRouter,Switch,Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from "./components/core/Home";
import Shop from "./components/core/Shop";

const Routes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path={'/'} component={Home} exact/>
                <Route path={'/shop'} component={Shop} />
            </Switch>
        </HashRouter>
    );
};

Routes.propTypes = {

};

export default Routes;