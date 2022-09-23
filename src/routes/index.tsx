import React from 'react';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom';
import App from "@/src/components/app";
// import Home from "./components/core/home";
// import Shop from "./components/core/shop";
// import Signup from "./components/core/signup/container";
// import Signin from "./components/core/signin/container";
// import Dashboard from "@/src/components/core/dashboard/container";
import {routesConfig} from "@/src/routes/config"
const Routes = () => {
    const getRoutes=()=>{
        return routesConfig.map((item)=>{
            return (
                <Route path={item.path} component={item.component}/>
            )
        })
    }
    return (
        <HashRouter>
            <Switch>
                {/*<Route path={'/home'} component={Home}/>*/}
                {/*<Route path={'/shop'} component={Shop} />*/}
                {/*<Route path={'/signup'} component={Signup} />*/}
                {/*<Route path={'/signin'} component={Signin} />*/}
                {/*<Route path={'/dashboard'} component={Dashboard} />*/}
                <Route path={"/app"} component={App} exact/>
                <Switch>
                    {getRoutes()}
                </Switch>
                <Redirect to="/app/home" />
            </Switch>
        </HashRouter>
    );
};

export default Routes;