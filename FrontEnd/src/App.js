import React from 'react';
import Navbar from './component/navbar'; 
import { BrowserRouter as Router, NavLink, Route, Routes, useNavigate } from "react-router-dom";
//importing routes
import Home from './component/Home';
import About from './component/About';
import Student_Form from './component/student_form';
import Managment_form from './component/managment_form';
import Admin from './component/admin';

export default function App() {
  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/getSeat-Allotment(for_Student)" element={<Student_Form />} />
       <Route path="/admin/*" element={<Admin/>}></Route>
      </Routes>
    </Router>
  );
}