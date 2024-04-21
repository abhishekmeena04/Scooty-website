import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/Page/Home";
import Contact from "../src/Page/Contract";
import About from "./Page/About";
import Scooter from "./Page/Scooter";
import { NotFound } from "./Page/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/scooty" element={<Scooter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
