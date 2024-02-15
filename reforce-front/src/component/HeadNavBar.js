import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import DropdownButton from "./DropdownButton";
import UserStateButton from "./UserStateButton";

const items1 = ['이미지', '카드뽑기', '강화하기'].map((key) => ({
    key,
    label: `${key}`,
}));

const HeadNavBar = ({ changeSelectedNav }) => {

    const navigate = useNavigate();

    return (
        <div>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#28CDC8',

                }}
            >
                <div className="demo-logo">
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['이미지']}
                    items={items1}
                    onClick={(event) => changeSelectedNav(event.key)}
                    style={{
                        flex: 1,
                        minWidth: 0,
                        backgroundColor: '#28CDC8',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center',  // 이 부분을 추가합니다.
                    }}
                />


                {localStorage.isLogin ? (
                    <DropdownButton />
                ) : (
                    <UserStateButton />
                )}


            </Header>
        </div>
    );
};

export default HeadNavBar;
