import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageWrapper from './components/layout/PageWrapper'; 
import Home from './pages/Home';
import RealTimeLocationMonitoring from './pages/RealTimeLocationMonitoring'
import Preparing from './pages/Preparing';
import LoginPage from './pages/Login';
import SearchWorker from './pages/SearchWorker';
import WorkerMapping from './pages/WorkerMapping'

const App = () => {
  return (
    <Router>
      <PageWrapper>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/Preparing' element={<Preparing/>} />
          <Route path='/WorkerMapping' element={<WorkerMapping/>} />
          <Route path="/RealTimeLocationMonitoring" element={<RealTimeLocationMonitoring />} />
          <Route path="/SearchWorker" element={<SearchWorker />} />

        </Routes>
      </PageWrapper>
    </Router>
  );
};

export default App;
