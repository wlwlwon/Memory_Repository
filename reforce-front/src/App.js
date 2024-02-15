import './App.css';
import MainLayout from './component/MainLayout.js';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './page/LoginPage.js';
import RegisterPage from './page/RegisterPage.js';
import AddImagePage from './page/AddImagePage.js';
import { theme } from 'antd';
import DetailPage from './page/DetailPage.js';
import DetailEditPage from './page/DetailEditPage.js';

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div
      className="App"
    >
      <Routes>
        <Route path='/' element={<MainLayout />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/addimage' element={<AddImagePage />} />
        <Route path='/detail/:imageId' element={<DetailPage />} />
        <Route path='/edit/:imageId' element={<DetailEditPage />} />
      </Routes>
    </div>
  );
}

export default App;
