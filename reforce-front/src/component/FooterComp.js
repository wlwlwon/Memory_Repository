import { Footer } from 'antd/es/layout/layout';
import React from 'react';
const FooterComp = () => (
    <Footer
        style={{
            textAlign: 'center',
            borderTop: '1px solid black',
            backgroundColor: '#28CDC8',
        }}
    >
        reforce tripple S ©{new Date().getFullYear()} Created by apply kim
    </Footer>
);
export default FooterComp;