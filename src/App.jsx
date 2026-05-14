import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/Pages/HomePage/HomePage';
import getCharacters from './services/api';

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getCharacters().then((data) => setCharacters(data));
  }, []);
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route index element={<HomePage characters={characters} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
