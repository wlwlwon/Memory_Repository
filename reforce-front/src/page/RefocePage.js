import { Content } from "antd/es/layout/layout"
import { Breadcrumb, Layout, theme } from "antd"
import logo from '../component/추억저장소.png';
import ReforceCard from "../component/ReforceCard";
import { PlusOutlined } from "@ant-design/icons";
import PopButton from "../component/PopButton";
import ReforceButton from "../component/ReforceButton";


const ReforcePage = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
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
                    marginBottom: '50px',
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
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
                    강화 하기
                    <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                    >

                        <ReforceCard />
                        <ReforceButton />

                    </div>

                </Content>
            </Layout>
        </Content>
    );
};
export default ReforcePage;