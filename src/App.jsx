import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import ProjectPage from './pages/ProjectPage';
import NewsletterPage from './pages/NewsletterPage';
import ContactPage from './pages/ContactPage';
import './css/App.css';

function App() {
  return (

    <div className='font-mono'>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/projectpage" element={<ProjectPage />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/newsletterpage" element={<NewsletterPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
