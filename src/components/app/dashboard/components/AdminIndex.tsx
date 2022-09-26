import React,{useState} from 'react';
import {Row,Col,Typography,Menu} from 'antd';
import {UserOutlined,AppstoreOutlined,ControlOutlined,UnorderedListOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types';
import AdminInfo from "@/src/components/app/dashboard/components/AdminInfo";
import AddCategory from "@/src/components/app/dashboard/components/AddCategory";
import AddProduction from "@/src/components/app/dashboard/components/AddProduction";
import OrderList from "@/src/components/app/dashboard/components/OrderList";
const { Title } = Typography;

const AdminIndex =({auth,category,getCategory}:any) => {
    const [current,setCurrent]=useState('adminInfo');
    const items = [
        {
            label: '管理员信息',
            key: 'adminInfo',
            icon:<UserOutlined />,
            component:<AdminInfo auth={auth}/>
        }, // 菜单项务必填写 key
        {
            label: '添加分类',
            key: 'addCategory',
            component:<AddCategory auth={auth}/>,
            icon:<AppstoreOutlined />
        },
        {
            label: '添加产品',
            key: 'addProduction',
            component:<AddProduction getCategory={getCategory} category={category}/>,
            icon: <ControlOutlined />
        },
        {
            label: '订单列表',
            key: 'orderList',
            component:<OrderList/>,
            icon:<UnorderedListOutlined />
        }
    ];
    const onSelect= (e:any) => {
        setCurrent(e.key)
    }
    const getContent = () => {
          return items.filter((item)=>{
              return current===item.key
          })[0].component
    }
    return (
        <Row gutter={[10,10]}>
            <Col span={6}>
                <Title level={4}>管理员中心</Title>
                <Menu items={items} selectedKeys={[current]} onSelect={onSelect}/>
            </Col>
            <Col span={18}>{getContent()}</Col>
        </Row>
    );
};

export default AdminIndex;