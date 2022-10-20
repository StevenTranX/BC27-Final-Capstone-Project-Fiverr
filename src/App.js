import './App.css';
import MainLayout from './Components/MainLayout/MainLayout';
import { Route, Switch, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import UserProfile from './Modules/UserProfile/Page/UserProfile';
import JobList from './Modules/JobList/Page/JobList';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/userProfile/:userId" element={<UserProfile />} />
        <Route path="/bookingJob" element={<JobList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <JobDetail /> */}
    </>
  );
}

export default App;
