import React from 'react';
import Layout from "../common/Layout";
import {useSelector} from "react-redux";

const Home = () => {
    const state=useSelector(state=>state)
    return (
        <Layout title={'模拟商城'} subTitle={'尽情购物吧～'}>
            home {JSON.stringify(state)}
        </Layout>
    );
};

export default Home;