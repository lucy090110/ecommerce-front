import React from 'react';
import {useSelector} from "react-redux";

const Home = (props:any) => {
    const state=useSelector(state=>state)
    return (
        <div>
            home {JSON.stringify(state)}
        </div>
    );
};

export default Home;