import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
// Pages
import About from './pages/About';
import Courses from './pages/Courses';
import Experience from './pages/Experience';
import ExternalProfiles from './pages/ExternalProfiles';
import Home from './pages/Home';
import ResearchInterests from './pages/ResearchInterests';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="research" element={<ResearchInterests />} />
        <Route path="courses" element={<Courses />} />
        <Route path="external-profiles" element={<ExternalProfiles />} />
        <Route path="experience" element={<Experience />} />
      </Route>
    </Routes>
  );
}

export default App;
