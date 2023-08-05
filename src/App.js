import React from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/pages/Home";
import Category from "../src/Components/pages/Category";
import details from '../src/Components/details.js';
import Slickpage from './Components/pages/SlickPage';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home"  element={<Home />} />
          <Route path="/"  element={<Home />} />
          <Route path="/category" element={<Category details={details} />} />
          <Route path="/slick-des" element={<Slickpage details={details} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
