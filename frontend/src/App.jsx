import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './pages/Hero';
import Overview from './pages/Overview';
import Dashboard from './pages/Dashboard';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import Contributors from './pages/Contributors';
import Contact from './pages/Contact';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Hero />} />
        <Route path="/Overview" element={<Overview />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/HowItWorks" element={<HowItWorks />} />
        <Route path="/Contributors" element={<Contributors />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;