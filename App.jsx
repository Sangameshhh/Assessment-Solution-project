import React from 'react';
// 1. BrowserRouter as Router is removed (to fix the nested router error)
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ThankYouPage from './pages/ThankYouPage';

function App() {
  return (
    <CartProvider>
      {/* 2. <Router> wrapper is REMOVED */}
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
