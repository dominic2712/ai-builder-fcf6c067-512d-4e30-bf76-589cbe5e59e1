import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateAI from './pages/CreateAI';
import UpdateAI from './pages/UpdateAI';
import ViewAI from './pages/ViewAI';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateAI />} />
          <Route path="/update/:id" element={<UpdateAI />} />
          <Route path="/view/:id" element={<ViewAI />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;