import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import IdeaPage from './components/IdeaPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/idea/:id" element={<IdeaPage />} />
      </Routes>
    </Router>
  );
};

export default App;
