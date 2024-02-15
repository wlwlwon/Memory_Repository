import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import logo from '../component/추억저장소.png';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const RegisterPage = () => {

    
    return (
        <div>
            <img src={logo} style={{ width: '700px', marginTop: '150px', marginBottom: '100px'}} />

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
                    paddingRight: "150px"
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="ID"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'ID를 입력하세요!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="PW"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'PW를 입력하세요!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button 
                    type="primary"
                     htmlType="submit"
                     style={{backgroundColor: "#28CDC8"}}
                     >
                        회원가입
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default RegisterPage;