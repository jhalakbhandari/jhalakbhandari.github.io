import React from "react";
import { Route, Routes } from "react-router";
import Contact from "./Pages/ContactPage/Contact";
//import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import Login from "./Pages/LoginPage/Login.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./Pages/ProjectsPage/Projects";
import { Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import PrivateRoute from "./Components/Routes/Private";
import CreateProject from "./Pages/Dashboard/CreateProject";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="" element={<Dashboard />} />
            <Route path="user/addproject" element={<CreateProject />} />
          </Route>
          <Route path="/home" element={<Navigate to={"/"} />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
