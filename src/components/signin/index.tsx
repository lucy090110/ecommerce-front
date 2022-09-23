import React from 'react';
import Layout from "../common/Layout";
import {Button, Form, Input, Result} from "antd";
import {Redirect} from "react-router-dom";

const Signin = (props:any) => {
    const {signinAction,signinResetAction,state}=props;
    const {signin}=state;
    const {auth}=signin
    const [form] = Form.useForm()
    const onFinish=(value:any)=>{
        signinAction(value);
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
        let path="/dashboard?role=admin"
        if(role===0){
            path="/dashboard?role=user"
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
        <Layout  {...props} title={'登录'} subTitle={"小伙伴，赶快来登录吧～"}>
            {auth && showRedirect()}
            {showError()}
            {signupForm()}
        </Layout>
    );
};

export default Signin;