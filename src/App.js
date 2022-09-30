import React from "react";
import Header from "./template/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./template/Home";
import Products from "./template/Products";
import Contact from "./template/Contact";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
