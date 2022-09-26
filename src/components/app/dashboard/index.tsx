import React from 'react';
import PropTypes from 'prop-types';
import AdminIndex from "@/src/components/app/dashboard/components/AdminIndex";
import UserIndex from "@/src/components/app/dashboard/components/UserIndex";
const Dashboard = (props:any) => {
    const {state:{app:{auth},router,dashboard:{data}},getCategory}=props
    const {user:{role}}=auth;
    const getComponent=()=>{
        if(role){
          return(<AdminIndex auth={auth} getCategory={getCategory} category={data}/>)
        }
        return (<UserIndex/>)
        return(<div>1</div>)
    }
    return (
        <>
            {getComponent()}
        </>
    );
};

Dashboard.propTypes = {

};

export default Dashboard;