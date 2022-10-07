import './App.css';
import MainLayout from './Components/MainLayout/MainLayout';
import { Route, Switch, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import UserProfile from './Modules/UserProfile/Page/UserProfile';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
