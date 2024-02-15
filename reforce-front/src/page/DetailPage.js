import { Content } from "antd/es/layout/layout"
import { Layout, Modal, theme } from "antd"
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
import { DeleteFilled, DeleteOutlined, DeleteRowOutlined, EditOutlined, SendOutlined } from "@ant-design/icons";

const DetailPage = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [imageCardData, setImageCardData] = useState('');
    const [InputtedComment, setInputtedComment] = useState('');
    const [isAuthor, setIsAuthor] = useState(false);
    const [postUserId, setPostUserId] = useState('');
    const imageId = useParams().imageId;
    const navigate = useNavigate();



    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        handleDeleteImage();

    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };



    useEffect(() => {
        fetchImageCard();
    }, []);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        // 로그인한 사용자와 게시글 작성자를 비교하여 isAuthor를 설정
        setIsAuthor(userId == postUserId);
    }, [imageCardData]);


    const handleDeleteImage = async () => {
        const userId = localStorage.getItem('userId');

        try {
            const response = await axios.post('/image/delete', {
                imageId: imageId,
                userId: userId
            });
            // 이미지 삭제에 대한 처리
            console.log('이미지가 성공적으로 삭제되었습니다.');
        } catch (error) {
            console.error('이미지 삭제 중 오류가 발생했습니다:', error);
        }
    };

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
            setPostUserId(response.data.userId);
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

                        {isAuthor ? (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',  // 이 부분을 추가합니다.
                                    gap: '26px'
                                }}>
                                <EditOutlined
                                    onClick={() => navigate('/edit/' + imageId)}
                                    style={{
                                        color: '#28CDC8', // 아이콘의 색상을 변경합니다.
                                        fontSize: '34px', // 아이콘의 크기를 키웁니다.
                                    }}
                                />

                                <DeleteFilled
                                    onClick={showModal}
                                    style={{
                                        color: '#28CDC8', // 아이콘의 색상을 변경합니다.
                                        fontSize: '34px', // 아이콘의 크기를 키웁니다.
                                    }}
                                />
                                <Modal title="게시글을 삭제하시겠습니까?" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                </Modal>
                            </div>
                        ) : (
                            <div></div>
                        )}

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
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'center',  // 이 부분을 추가합니다.
                        }}
                    >
                        <CustomLikeButton
                            imageId={imageId}
                        />
                        <div style={
                            {
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: '10px'
                            }
                        }>
                            <TextField sx={{ width: '660px' }} label={'댓글'} id="margin-dense" margin="dense" onChange={(e) => setInputtedComment(e.target.value)} />
                            <SendOutlined
                                style={{
                                    color: '#28CDC8', // 아이콘의 색상을 변경합니다.
                                    fontSize: '34px', // 아이콘의 크기를 키웁니다.
                                }}
                                onClick={fetchComment}
                            />

                        </div>
                        <CommentList
                            imageId={imageId}
                        />
                    </div>
                </Layout>
            </Content>
            <FooterComp />
        </div>
    );
};
export default DetailPage;