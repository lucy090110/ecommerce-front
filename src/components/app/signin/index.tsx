import React from 'react';
import Layout from "../../common/Layout";
import {Button, Form, Input, Result} from "antd";
import {Redirect} from "react-router-dom";

const Signin = (props:any) => {
    const {signinAction,getAuth,signinResetAction,state:{signin,app:{auth}}}=props;
    const [form] = Form.useForm()
    const onFinish=(value:any)=>{
        signinAction(value);
        getAuth();
    }
    //注册失败
    const showError=()=>{
        if(signin.loaded && !signin.success){
            return (
                <Result
                    status="warning"
                    title="登录失败" key={'warning'}
                    subTitle={signin.message}
                />
            )
        }

    }
    const showRedirect=()=>{
        const {user:{role}}=auth
        let path="/app/dashboard?role=admin"
        if(role===0){
            path="/app/dashboard?role=user"
        }
        return (
            <Redirect to={path}/>
        )

    }
    const signupForm=()=>(
        <Form
            name="form" form={form} onFinish={onFinish} key={'form'}
        >
            <Form.Item
                label="邮箱"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    登录
                </Button>
            </Form.Item>
        </Form>
    )

    return (
        <>
            {auth && showRedirect()}
            {showError()}
            {signupForm()}
        </>
    );
};

export default Signin;