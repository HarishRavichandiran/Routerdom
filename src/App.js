import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import All from "./pages/All";
import FullStackDevelopment from "./pages/FullStackDevelopment";
import DataScience from "./pages/DataScience";
import CyberSecurity from "./pages/CyberSecurity";
import Career from "./pages/Career";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <div className="w-100" style={{ maxWidth: "1200px" }}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<All />} />
            <Route path="/full-stack-development" element={<FullStackDevelopment />} />
            <Route path="/data-science" element={<DataScience />} />
            <Route path="/cyber-security" element={<CyberSecurity />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;