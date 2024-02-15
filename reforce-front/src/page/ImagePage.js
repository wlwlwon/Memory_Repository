import { Content } from "antd/es/layout/layout"
import ImageCard from "../component/ImageCard"
import { Layout, theme } from "antd"
import logo from '../component/추억저장소.png';
import AddButton from "../component/AddButton";
import { BASE_API_URL } from "../component/utils/Constants";
import axios from "axios";
import { useEffect, useState } from "react";



const ImagePage = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [imageCardDataList, setImageCardDataList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/image");
                setImageCardDataList(response.data);
            } catch (error) {
                console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
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

                <img src={logo} style={{ width: '400px', marginTop: '50px', marginBottom: '50px' }} />
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
                        
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                justifyContent: 'center',  // 이 부분을 추가합니다.
                            }}
                        >

                            {imageCardDataList.map((imageCardData, index) => 
                                <ImageCard
                                    key={index}
                                    imageId={imageCardData.imageId}
                                    image_url={imageCardData.path}
                                    title={imageCardData.imageName}
                                    description={imageCardData.imageCreatedTime}
                                    userName={imageCardData.name}
                                />
                            )}
                        </div>
                        <AddButton />
                    </Content>

                </Layout>
            </Content>
        </div>
    );
};
export default ImagePage;