import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Read from "./components/Read";
import Update from "./components/Update";

const App = () => {
  return (
    <div className="overflow-hidden">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/read" element={<Read />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
