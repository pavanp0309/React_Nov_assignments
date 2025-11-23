import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Students from "./pages/Students";
import StudentDetail from "./pages/StudentDetail";

import Profile from "./pages/studentSubpages/Profile";
import Marks from "./pages/studentSubpages/Marks";
import Attendance from "./pages/studentSubpages/Attendance";

import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <NavBar />

      <div className="container mt-4">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/students" element={<Students />} />

          <Route path="/students/:id" element={<StudentDetail />}>
            <Route path="profile" element={<Profile />} />
            <Route path="marks" element={<Marks />} />
            <Route path="attendance" element={<Attendance />} />
          </Route>

          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
    </>
  );
};

export default App;
