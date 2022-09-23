import React from 'react';
import Layout from "../common/Layout";
import {useSelector} from "react-redux";

const Shop = (props:any) => {
    const state=useSelector(state=>state)
    return (
        <Layout {...props} title={'商品页'} subTitle={'请挑选你喜欢的商品～'}>
            shop {JSON.stringify(state)}
        </Layout>
    );
};

export default Shop;

