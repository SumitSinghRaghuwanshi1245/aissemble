import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Blog, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import ChatGPT from './Pages/ChatGPT/GPT';  // Import your ChatGPT component
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <Brand />
                <WhatGPT3 />
                <Features />
                <CTA />
                <Blog />
                <Footer />
              </>
            } />
            <Route path="/chatgpt" element={<ChatGPT />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;