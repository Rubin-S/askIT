import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Pages/NavBar.jsx";
import Home from "./Pages/Home.jsx";
import Search from "./Pages/Search-Filter.jsx";
import Signup from "./Pages/Signup.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import ProfileSetup from "./Pages/ProfileSetup.jsx";
import Footer from "./components/Home/HomeFooter";

const App = () => {
  return (
    <Router>
      <NavBar />   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Provider-Signup" element={<Signup />} />
        <Route path="/Consumer-Signup" element={<ProfileSetup />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
      </Routes>
      <Footer />  
    </Router>
  );
};

export default App;
