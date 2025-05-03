import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AppNavbar from './components/Navbar';
import Admission from './components/Admission';

const App = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admission" element={<Admission />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
