import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Pages/NavBar.jsx";
import Home from "./Pages/Home.jsx";
import Search from "./Pages/Search-Filter.jsx";
import Signup from "./Pages/Signup.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Verify from "./Pages/Verify.jsx";
import Footer from "./components/Home/HomeFooter";
import ProfileCreation from './Pages/ProfileCreation.jsx';

const App = () => {
  return (
    
    <Router>
      <NavBar />   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Provider-Signup" element={<Signup />} />
        <Route path="/Consumer-Signup" element={<Verify />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/ProfileCreation" element={<ProfileCreation />} />
      </Routes>
      <Footer />  
    </Router>
  );
};

export default App;
