import React from 'react';
import {MenuProps,Menu} from 'antd';
import {useSelector} from "react-redux";
import {AppState} from "../../../store"
import {Link} from "react-router-dom";
import {RouterState} from "connected-react-router";

const Navigation = (props:any) => {
    const {state:{auth}}=props
    const items: MenuProps['items'] = [
        {
            label: <Link to={'home'}>{'首页'}</Link>,
            key: 'home'
        },
        {
            label:<Link to={'shop'}>{'商店'}</Link>,
            key: 'shop'
        },

    ]
    if(auth){
        const {role}=auth
        let path="/dashboard?role=admin"
        if(role===0){
            path="/dashboard?role=user"
        }
        items.push({
            label:<Link to={path}>{'dashboard'}</Link>,
            key: 'dashboard'
        })

    }else{
        items.push({
            label:<Link to={'signin'}>{'登录'}</Link>,
            key: 'signin'
        },{
            label:<Link to={'signup'}>{'注册'}</Link>,
            key: 'signup'
        })
    }
    const router=useSelector<AppState,RouterState>((state)=> state.router)
    const keyName=router.location.pathname==='/'?'home':router.location.pathname
    const pathname= keyName.split('/')[1]
    return <Menu selectedKeys={[pathname]} mode="horizontal" items={items} />;
};

Navigation.propTypes = {

};

export default Navigation;