import React from 'react';
import {Descriptions} from 'antd';

const AdminInfo = ({auth}:any) => {
    const {user:{name,email,role}}=auth
    return (
        <Descriptions layout="vertical" bordered>
            <Descriptions.Item label="昵称">{name}</Descriptions.Item>
            <Descriptions.Item label="角色">{role?'管理员':'用户'}</Descriptions.Item>
            <Descriptions.Item label="邮箱">{email}</Descriptions.Item>
        </Descriptions>
    );
};

export default AdminInfo;