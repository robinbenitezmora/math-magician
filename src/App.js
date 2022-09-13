/*eslint-disable*/
import * as React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Navbar from './components/Navbar';
import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </div>
  </Router>
);

export default App;
