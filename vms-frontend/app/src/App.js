import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterVisitor from './RegisterVisitor';
import ThankYou from './ThankYou';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterVisitor />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
