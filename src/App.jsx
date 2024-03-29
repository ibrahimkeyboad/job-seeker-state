import JobRegister from './components/job/Jobregister';
// import './App.css';
import Profile from './pages/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { JobProvider } from './context/JobContext';
import SearchPage from './components/job/SearchPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <JobProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='profile' element={<Profile />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='/register' element={<JobRegister />} />
        </Routes>
      </JobProvider>
    </BrowserRouter>
  );
}

export default App;
