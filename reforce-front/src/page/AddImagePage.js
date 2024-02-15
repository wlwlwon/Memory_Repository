import React from 'react';
import { Button, Checkbox, Form, Input, Layout, theme } from 'antd';
import logo from '../component/추억저장소.png';
import UploadImage from '../component/UploadImage';
import FooterComp from '../component/FooterComp';
import { useNavigate } from 'react-router';

const AddImagePage = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const navigate = useNavigate();
    return (

        <div>
            <a href=''>
            <img src={logo} onClick={()=>navigate('/')} style={{ width: '500px', marginTop: '150px', marginBottom: '100px' }} />
            </a>
            <UploadImage />
            
            <FooterComp />
        </div>
        
    );
};
export default AddImagePage;