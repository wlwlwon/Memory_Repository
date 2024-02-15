import React, { useState } from 'react';
import { Alert, Button, Checkbox, Form, Input, Space, theme } from 'antd';
import logo from '../component/추억저장소.png';
import FooterComp from '../component/FooterComp';

import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';

const LoginPage = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    // const store = useStore();
    const [success, setSuccess] = useState(false);
    const [loginFail, setloginFail] = useState(false);
    const navigate = useNavigate();

    const onFinish = (values) => {
        axios.post(`http://localhost:8080/user/signin`,
            {
                id: values.userID,
                password: values.password,
            }
        )
            .then(response => {
                setSuccess(true);
                setloginFail(false);
                console.log('로그인 성공:', response.data);

                const accessToken = response.data.accessToken;
                const refreshToken = response.data.refreshToken;

                // console.log(JSON.stringify(response));

                const dt = jwtDecode(accessToken);
                console.log(dt);
                console.log("aaaaaaaaa"+ dt?.userId);
                localStorage.setItem("id", dt.userId);
                localStorage.setItem("name", dt.userName);
                localStorage.setItem("userId", response.data.userId);
                localStorage.setItem("isLogin", true);
                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("refreshToken", refreshToken);
                // store.setMemberInfo(dt?.userId, dt?.userName);


                setTimeout(function () {
                    navigate("/");
                }, 1000);

                // 회원가입 성공 시 추가 동작
            })
            .catch(error => {
                setloginFail(true);
                console.log('로그인 실패:', error);
                // 회원가입 실패 시 추가 동작
            });
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (

        <div>
            <img src={logo} style={{ width: '550px', marginTop: '150px', marginBottom: '100px' }} />

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
                    name="userID"
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
                        style={{
                            backgroundColor: "#28CDC8",
                            marginBottom: '100px'
                        }}
                    >
                        로그인
                    </Button>
                </Form.Item>
            </Form>

            {success && (
                <Space
                    direction="vertical"
                    style={{
                        width: '300px',
                        position: 'fixed',
                        top: '10px',
                        left: '40%',
                    }}
                >
                    <Alert message="로그인 성공" type="success" showIcon />
                </Space>
            )}

            {loginFail && (
                <Space
                    direction="vertical"
                    style={{
                        width: '300px',
                        position: 'fixed',
                        top: '10px',
                        left: '40%',
                    }}
                >
                    <Alert message="로그인 실패" type="error" showIcon />
                </Space>
            )}
            <FooterComp />
        </div>
    );
};
export default LoginPage;