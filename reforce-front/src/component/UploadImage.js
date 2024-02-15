import React, { useEffect, useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { Form, Input, message, theme, Upload } from 'antd';
import { uploadToS3 } from '../config/awsConfig';
import Layout from 'antd/es/layout/layout';
import { TextField } from '@mui/material';
const { Dragger } = Upload;

const UploadImage = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [image, setImage] = useState(('', ''));
    const [inputtedImageName, setInputtedImageName] = useState('');
    const [inputtedImageContent, setInputtedImageContent] = useState('');

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    const handleChange = (e) => {
        const { name, value } = e.target.value;

        setImage((prevState => {
            return {
                ...prevState,
                [name]: value
            };
        }));
    };

    useEffect(() => {
        console.log("ggggggggggggggggg" + inputtedImageName + "abc " + inputtedImageContent);
    }, [inputtedImageName, inputtedImageContent])

    const props = {
        name: 'file',
        multiple: true,
        // action: file => uploadToS3(file), // AWS S3에 업로드하는 함수 호출
        data: {
            imageName: inputtedImageName,
            content: inputtedImageContent,
            userId: localStorage.getItem('userId')
        },
        action: 'http://localhost:8080/image/add',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return (
        <Layout
            style={{
                padding: '24px 0',

                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >

                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                        margin: "0 auto",
                        marginBottom: "50px",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <TextField label={'사진 제목'} id="margin-dense" margin="dense" onChange={(e) => setInputtedImageName(e.target.value)} />
                    <TextField label={'사진 내용'} id="margin-dense" margin="dense" onChange={(e) => setInputtedImageContent(e.target.value)}/>


                    <Form.Item
                        wrapperCol={{
                            offset: 4,
                            span: 8,
                        }}
                    >
                    </Form.Item>

                    <label>이미지 파일 업로드</label>
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                            banned files.
                        </p>
                    </Dragger>
                </Form>
            </div >
        </Layout>
        

    );
};
export default UploadImage;