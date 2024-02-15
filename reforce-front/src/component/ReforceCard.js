import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const ReforceCard = () => (
    <Card
        hoverable
        style={{
            width: 300,
            margin: '10px'
        }}
        cover={<img alt="example"  src="https://github.com/PragmaticArchive/Algorithm/assets/58178752/154dbfec-f757-4712-a614-0e4af76c7677" />}
    >
        <Meta title="극락 호진" description="www.ktds.com" />
    </Card>
);
export default ReforceCard;