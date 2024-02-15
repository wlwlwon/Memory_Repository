import { Content } from "antd/es/layout/layout"
import { Breadcrumb, Layout, theme } from "antd"
import logo from '../component/추억저장소.png';
import PopCard from "../component/PopCard";
import PopButton from "../component/PopButton";


const PopPage = () => {
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
                    카드 뽑기
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <PopCard />
                        <PopButton />

                    </div>

                </Content>
            </Layout>
        </Content>

    );
};
export default PopPage;