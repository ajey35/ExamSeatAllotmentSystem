// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './component/Home';
import About from './component/About';
import Student_Form from './component/student_form';
import Admin from './component/admin';
import Results from './component/Results';
import LoginForm  from './component/loginform';

export default function App() {
  return (
    <Router basename="/">
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path='/' element={<LoginForm/>}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-seat" element={<Student_Form />} />
          <Route path="/results" element={<Results />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}
