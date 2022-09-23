import React from 'react';
import PropTypes from 'prop-types';
import Layout from "@/src/components/core/common/Layout";
const Dashboard = (props:any) => {
    return (
        <Layout {...props} title={'模拟商城'} subTitle={'尽情购物吧～'}>
        </Layout>
    );
};

Dashboard.propTypes = {

};

export default Dashboard;