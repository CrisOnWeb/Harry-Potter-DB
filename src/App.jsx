// import { useState, useEffect } from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import fetchData from '/services/api';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <h2>Character Directory</h2>
      </main>
      <Footer />
    </>
  );
}

export default App;
