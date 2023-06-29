import React from "react";
import { Route, Routes } from "react-router";
import Contact from "./Pages/ContactPage/Contact";
//import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./Pages/ProjectsPage/Projects";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to={"/"} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
