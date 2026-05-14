// import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/Pages/HomePage/HomePage';
// import fetchData from '/services/api';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
