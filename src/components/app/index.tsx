import React, {FC, useEffect} from "react";
import Navigation from "@/src/components/common/Navigation";
import {PageHeader} from "antd";
import {Redirect, Route, Switch} from "react-router-dom";
import routesConfig from "@/src/routes/config";

const App= (props:any) => {
    const {auth,location:{pathname},getAuth}=props
    const role=auth?.user?.role
    const getRoutes=()=>{
        return routesConfig.map((item)=>{
            const {path,key,component}=item
            if(path==='/app/dashboard' && !auth){
                return (
                    <Redirect to="/app/signin" />
                )
            }else{
                return (
                    <Route path={path} key={key }component={component}/>
                )
            }
        })
    }
    useEffect(()=>{
        getAuth();
    },[pathname])
    const getTitleInfo=()=>{
        const titleInfo=routesConfig.filter((item)=>{
            return item.path===pathname
        })[0]
        const {path}=titleInfo
        if(path==='/app/dashboard'){
            console.log({
                ...titleInfo,
                title: role?`管理员${titleInfo.title}`:`用户${titleInfo.title}`
            })
            return {
                ...titleInfo,
                title: role?`管理员${titleInfo.title}`:`用户${titleInfo.title}`
            }
        }
        return titleInfo

    }
    const {title,subTitle}=getTitleInfo();
    return (
        <div>
            <Navigation auth={auth}/>
            <PageHeader
                className="jumbotron"
                title={title}
                subTitle={subTitle}
            />
            <div style={{width:"80%",margin:"0 auto"}}>
                <Switch>
                    {getRoutes()}
                    <Redirect to="/app/home" />
                </Switch>
            </div>
        </div>
    );
};

export default App;