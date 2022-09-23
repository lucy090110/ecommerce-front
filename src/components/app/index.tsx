import React, {FC} from "react";
import Navigation from "@/src/components/common/Navigation";
import {PageHeader} from "antd";

const App= ({children,title,subTitle}:any) => {
    return (
        <div>
            <Navigation/>
            <PageHeader
                className="jumbotron"
                title={title}
                subTitle={subTitle}
            />
            <div style={{width:"80%",margin:"0 auto"}}>
                {children}
            </div>
        </div>
    );
};

export default App;