import React from 'react';
import {useRoutes} from 'react-router-dom';
import Home from "./components/core/Home";
import Shop from "./components/core/Shop";

const routes=[{
    path:'/',
    element:<Home/>
},{
    path:'/shop',
    element:<Shop/>
}]

const Routes = ()=> {
    let element=useRoutes(routes);
    return element;
};

Routes.propTypes = {

};

export default Routes;