import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './pages/Header';
import Create from './pages/Create';
import Notes from './pages/Notes';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
