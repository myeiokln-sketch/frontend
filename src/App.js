import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './home';
import Services from './services';
import Portfolio from './portfolio';
import ProjectDetails from './ProjectDetails';
import Contact from './contact';
import Team from './team';
import About from './about';
import Careers from './careers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact/>} />
        <Route path="team" element={<Team/>} />
        <Route path="about" element={<About/>}/>
        <Route path="careers" element={<Careers/>}/>
      </Routes>
    </Router>
  );
}

export default App;
