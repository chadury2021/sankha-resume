import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
// Pages
import About from './pages/About';
import Achievements from './pages/Achievements';
import Education from './pages/Education';
import Experience from './pages/Experience';
import ExternalProfiles from './pages/ExternalProfiles';
import Home from './pages/Home';
import ResearchInterests from './pages/ResearchInterests';
import Talks from './pages/Talks';
import Writings from './pages/Writings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="education" element={<Education />} />
        <Route path="talks" element={<Talks />} />
        <Route path="writings" element={<Writings />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="research" element={<ResearchInterests />} />
        <Route path="external-profiles" element={<ExternalProfiles />} />
        <Route path="experience" element={<Experience />} />
      </Route>
    </Routes>
  );
}

export default App;
