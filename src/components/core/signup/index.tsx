import React from 'react';
import { Button, Form, Input } from 'antd';
import Layout from "../common/Layout";
import PropTypes from 'prop-types';

const Signup = (props:any) => {
    console.log(props)
    const {signup}=props;
    const onFinish=(value:any)=>{
        console.log(value)
        signup(value);
    }
    return (
        <Layout title={'注册'}>
            <Form
                name="basic" onFinish={onFinish}
            >
                <Form.Item
                    label="帐号"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
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

                <Form.Item
                    label="邮箱"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                </Form.Item>
            </Form>
        </Layout>
    );
};


Signup.propTypes = {

};
export default Signup;