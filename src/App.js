import './App.css';
import RegisterMain from './TranTrongTin-Authentication/Register/Components/RegisterMain';
import LoginMain from './TranTrongTin-Authentication/Login/Components/LoginMain/LoginMain';
import MainLayout from './Components/MainLayout/MainLayout';
import Header from './Components/Header/Header';
import { Route, Switch, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
