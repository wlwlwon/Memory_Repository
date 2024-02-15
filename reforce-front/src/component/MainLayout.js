import React, { useEffect, useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import ImageCard from './ImageCard.js';
import HeadNavBar from './HeadNavBar.js';
import { Route, Router } from 'react-router-dom';
import ImagePage from '../page/ImagePage.js';
import ImagePage2 from '../page/PopPage.js';
import ImagePage3 from '../page/RefocePage.js';
import PopPage from '../page/PopPage.js';
import ReforcePage from '../page/RefocePage.js';
import FooterComp from './FooterComp.js';

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [selectedNav, setSelectedNav] = useState(0);

    useEffect(() => {
        console.log("ggggggggggggggggg" + selectedNav);
    }, [selectedNav])
    return (
        <Layout>

            <HeadNavBar
                changeSelectedNav={(value) => setSelectedNav(value)}
            />
            {selectedNav == '0' && <ImagePage/>}
            {selectedNav == '이미지' && <ImagePage />}
            {selectedNav == '카드뽑기' && <PopPage />}
            {selectedNav === '강화하기' && <ReforcePage />}
          <FooterComp/>
        </Layout>
    );
};
export default MainLayout;