import React,{useState,useEffect}from 'react';
import { RcFile } from "antd/lib/upload"
import {Button, Form, Input,Select,Upload} from "antd";
import {UploadOutlined} from '@ant-design/icons'
const { Option } = Select;

const AddProduction = (props:any) => {
    const {getCategory,category}=props
    const [form] = Form.useForm()
    const [file,setFile]=useState<RcFile>()
    useEffect(()=>{
        getCategory();
    },[])
    const onFinish=(value:any)=>{
        console.log(value)
    }
    const uploadProps={
        accept:'image/*',
        beforeUpload:function (file:RcFile){
            setFile(file);
            return false;
        }
    }
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    return (
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
                Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
        </Select>
        // <Form onFinish={onFinish} initialValues={{ category: "" }}>
        //     <Form.Item>
        //         <Upload {...uploadProps}>
        //             <Button icon={<UploadOutlined />}>上传商品封面</Button>
        //         </Upload>
        //     </Form.Item>
        //     <Form.Item name="name" label="商品名称">
        //         <Input />
        //     </Form.Item>
        //     <Form.Item name="description" label="商品描述">
        //         <Input />
        //     </Form.Item>
        //     <Form.Item name="price" label="商品价格">
        //         <Input />
        //     </Form.Item>
        //     <Form.Item name="category" label="所属分类">
        //         <Select>
        //             <Option value="">请选择分类</Option>
        //             {category?.map((item:any) => (
        //                 <Option key={item._id} value={item._id}>
        //                     {item.name}
        //                 </Option>
        //             ))}
        //         </Select>
        //     </Form.Item>
        //     <Form.Item name="quantity" label="商品数量">
        //         <Input />
        //     </Form.Item>
        //     <Form.Item name="shipping" label="是否需要运输">
        //         <Select>
        //             <Option value="1">是</Option>
        //             <Option value="0">否</Option>
        //         </Select>
        //     </Form.Item>
        //     <Form.Item>
        //         <Button type="primary" htmlType="submit">
        //             添加商品
        //         </Button>
        //     </Form.Item>
        // </Form>
    );
};

export default AddProduction;