import React,{useEffect} from 'react';
import {Button, Form, Input, Result, Select} from 'antd';
import {Link} from "react-router-dom";

const { Option } = Select;
const Signup = (props:any) => {
    const {signupAction,signupResetAction,state}=props;
    const {signup}=state;
    const [form] = Form.useForm()
    const onFinish=(value:any)=>{
        signupAction(value);
    }

    //注册成功重置页面
    useEffect(()=>{
        if(signup.loaded && signup.success){
            form.resetFields()
        }
    },[signup])

    useEffect(()=>{
        return ()=>{
            signupResetAction()
        }
    },[])
    //注册成功
    const showSuccess=()=>{
        if(signup.loaded && signup.success){
            return (
                <Result
                    status="success"
                    title="注册成功！" key={'success'}
                    subTitle="用户注册成功"
                    extra={[
                        <Button type="primary" key={'1'}>
                            <Link to={'./signin'}>登录</Link>
                        </Button>
                    ]}
                />
            )
        }

    }

    //注册失败
    const showError=()=>{
        if(signup.loaded && !signup.success){
            return (
                <Result
                    status="warning"
                    title="注册失败" key={'warning'}
                   subTitle={signup.message}
                />
            )
        }

    }
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    const signupForm=()=>(
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
                Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
        </Select>
        // <Form
        //     name="form" form={form} onFinish={onFinish} key={'form'}
        // >
        //     <Form.Item
        //         label="帐号"
        //         name="name"
        //         rules={[{ required: true, message: 'Please input your username!' }]}
        //     >
        //         <Input />
        //     </Form.Item>
        //
        //     <Form.Item
        //         label="密码"
        //         name="password"
        //         rules={[{ required: true, message: 'Please input your password!' }]}
        //     >
        //         <Input.Password />
        //     </Form.Item>
        //
        //     <Form.Item
        //         label="邮箱"
        //         name="email"
        //         rules={[{ required: true, message: 'Please input your email!' }]}
        //     >
        //         <Input />
        //     </Form.Item>
        //
        //     <Form.Item>
        //         <Button type="primary" htmlType="submit">
        //             注册
        //         </Button>
        //     </Form.Item>
        // </Form>

    )
    return (
        <>
            {showSuccess()}
            {showError()}
            {signupForm()}
        </>
    );
};


Signup.propTypes = {

};
export default Signup;