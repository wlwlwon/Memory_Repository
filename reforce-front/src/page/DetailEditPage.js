import { Content } from "antd/es/layout/layout"
import { Form, Layout, theme } from "antd"
import logo from '../component/추억저장소.png';
import AddButton from "../component/AddButton";
import axios from "../axios/axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import DetailCard from "../component/DetailCard";
import HeadNavBar from "../component/HeadNavBar";
import FooterComp from "../component/FooterComp";
import CommentList from "../component/CommentList";
import CustomLikeButton from "../component/CustomLikeButton";
import { Button, TextField } from "@mui/material";
import { SendOutlined } from "@ant-design/icons";

const DetailEditPage = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [imageCardData, setImageCardData] = useState('');
    const [InputtedComment, setInputtedComment] = useState('');
    const imageId = useParams().imageId;
    const navigate = useNavigate();


    useEffect(() => {
        fetchImageCard();
    }, []);

    const fetchComment = async () => {
        const userId = localStorage.getItem('userId');
        try {
            const response = await axios.post(`/image/comment`, {
                commentContent: InputtedComment,
                imageId: imageId,
                userId: userId
            });
            // message.success('댓글이 성공적으로 추가되었습니다.'); // 성공 알림 표시
            setInputtedComment(''); // 텍스트 필드 비우기

        } catch (error) {
            console.error("댓글 작성중 오류 발생:", error);
        }
    };

    const fetchImageCard = async () => {
        try {
            const response = await axios.get(`/image/detail?imageId=${imageId}`);
            setImageCardData(response.data);
        } catch (error) {
            console.error("이미지 데이터를 가져오는 중 오류가 발생했습니다:", error);
        }
    }

    return (
        <div>
            <HeadNavBar />
            <Content
                style={{
                    padding: '0 48px',
                }}
            >
                {/* <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb> */}
                <a href="">
                    <img src={logo} onClick={() => navigate('/')} style={{ width: '400px', marginTop: '50px', marginBottom: '50px' }} />
                </a>
                <Layout
                    style={{
                        padding: '24px 0',
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        marginBottom: '50px'
                    }}
                >
                    {/* <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
              }}
              items={items2}
            />
          </Sider> */}
                    <Content
                        style={{
                            padding: '0 24px',
                            minHeight: 280,
                        }}
                    >
                        Content
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                justifyContent: 'center',  // 이 부분을 추가합니다.
                            }}
                        >
                            <DetailCard

                                image_url={imageCardData.path}
                                title={imageCardData.imageName}
                                description={imageCardData.content}
                                userName={imageCardData.name}
                                createdTime={imageCardData.imageCreatedTime}
                            />
                        </div>
                    </Content>

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
                        autoComplete="off"
                    >
                        <TextField label={imageCardData.imageName} id="margin-dense" margin="dense" />
                        <TextField label={imageCardData.content} id="margin-dense" margin="dense" />
                        <Form.Item
                            wrapperCol={{
                                offset: 4,
                                span: 8,
                            }}
                        >
                        </Form.Item>
                    </Form>
                    {/* <TextField label={'사진 제목'} id="margin-dense" margin="dense" onChange={(e) => setInputtedImageName(e.target.value)} /> */}


                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'center',  // 이 부분을 추가합니다.
                        }}
                    >

                    </div>
                </Layout>
            </Content>
            <FooterComp />
        </div>
    );
};
export default DetailEditPage;