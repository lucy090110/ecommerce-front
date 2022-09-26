import React from 'react';
import {useSelector} from "react-redux";

const Shop = (props:any) => {
    const state=useSelector(state=>state)
    return (
        <div>
            shop {JSON.stringify(state)}
        </div>
    );
};

export default Shop;

