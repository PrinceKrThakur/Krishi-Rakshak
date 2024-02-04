import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from "./Pages/FrontPage";
import Home from "./Pages/Home";
import Marketplace from "./Pages/Marketplace";
import Help from "./Pages/Help";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          {/* Add other routes as needed */}
          <Route path="/help" element={<Help/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
