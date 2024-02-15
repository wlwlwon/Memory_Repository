import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
 
const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="">
                회원 정보
            </a>
        ),
    },
    {
        key: '2',
        danger: true,
        label: 'logout',
    },
];
const DropdownButton = () => {
    const navigate = useNavigate();

    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    const handleItemClick = ({ key }) => {
        if (key === '2') {
            // 로컬 스토리지 지우기

            
            // 메인 화면으로 이동
            axios.post('http://localhost:8080/user/logout',{
                accessToken: accessToken,
                refreshToken: refreshToken
            });
            localStorage.clear();
            navigate('/');
        }
    };

    return(

    <Dropdown
    overlay={
        <Menu onClick={handleItemClick}>
            {items.map((item) => (
                <Menu.Item key={item.key} danger={item.danger}>
                    {item.label}
                </Menu.Item>
            ))}
        </Menu>
    }
    >
        <a onClick={(e) => e.preventDefault()}>
            <Space>
                {localStorage.getItem('name')}님 회원정보
                <DownOutlined />
            </Space>
        </a>
    </Dropdown>
)
};
export default DropdownButton;