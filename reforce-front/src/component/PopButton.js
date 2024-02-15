import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';
const PopButton = () => {
    const [size, setSize] = useState('large'); // default is 'middle'
    return (
        <>
            <Flex gap="small" align="flex-start" vertical>
                <Flex gap="small" wrap="wrap">
                    <Button type="primary" icon={<DownloadOutlined />} size={size} style={{ backgroundColor: "#28CDC8" }}>
                        카드 뽑기
                    </Button>
                </Flex>
            </Flex>
        </>
    );
};
export default PopButton;