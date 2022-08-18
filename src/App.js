import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Home from './pages/index.js';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contactus';
import SignUp from './pages/signup';
import SignIn from './pages/signin';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes> 
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contactus' element={<Contact />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;