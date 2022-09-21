import React from 'react';
import Layout from "../common/Layout";
import {Button, Form, Input} from "antd";

const Signin = () => {
    return (
        <Layout title={'登录'}>

            <Form
                name="basic"
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

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </Layout>
    );
};

export default Signin;