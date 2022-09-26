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
                    <Redirect to="/app/signin"  key={'0'}/>
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
        if(titleInfo?.path==='/app/dashboard'){
            return {
                ...titleInfo,
                title: role?`管理员${titleInfo.title}`:`用户${titleInfo.title}`
            }
        }else{
            return titleInfo
        }

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
            <div style={{width:"80%",margin:"20px auto"}}>
                <Switch>
                    {getRoutes()}
                    {auth && <Redirect to="/app/home" key={'1'} />}
                </Switch>
            </div>
        </div>
    );
};

export default App;