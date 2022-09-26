import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {API} from '@/src/config'
import {Button, Form, Input, message} from "antd";

const AddCategory = ({auth}:any) => {
    const [name,setName]=useState(null);
    const [form] = Form.useForm()
    const {token,user:{_id}}=auth;
    useEffect(()=>{
         async function addCategory(){
             try{
                 let response=await axios.post(
                     `${API}/category/create/${_id}`,
                     {name},
                     {
                         headers:{
                             Authorization:`Bearer ${token}`
                         }
                     }
                 )
                 message.success(`${response.data.name}分类添加成功`)
                 form.resetFields()
             }catch (error){
                 message.error(`${error.response.data.error}`)
             }
        }
        if(name){
            addCategory()
        }
        return ()=>{
            message.destroy()
        }
    },[name])
    const onFinish=(value:any)=>{
        setName(value.name)
    }
    return (
        <Form
            name="form" form={form} onFinish={onFinish} key={'form'}
        >
            <Form.Item
                label="商品分类"
                name="name"
            >
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    添加分类
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AddCategory;