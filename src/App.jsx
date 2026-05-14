import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/Pages/HomePage/HomePage';
import getCharacters from './services/api';

function App() {
  // SECCIÓN ESTADO
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [house, setHouse] = useState('gryffindor');

  // SECCIÓN USE-EFFECT
  useEffect(() => {
    getCharacters(house).then((data) => setCharacters(data));
  }, [house]);

  // SECCIÓN FUNCIONES DE EVENTOS
  const handleSearchChange = (value) => {
    setSearch(value);
  };

  const handleHouseChange = (value) => {
    setHouse(value);
  };

  // SECCIÓN HELPERS
  const normalizeText = (text) => {
    return text
      .toLowerCase() // Minúsculas
      .trim(); // elimina espacios
  };

  const searchedText = normalizeText(search);

  const searchedCharacters = !searchedText
    ? // Si search está vacío, devuelvo todos los personajes
      characters
    : // Si no, filtro por el contenido de search
      characters.filter((character) =>
        // Recojo los personajes que coincidan
        normalizeText(character.name).includes(searchedText)
      );

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route
            index
            element={
              <HomePage
                characters={searchedCharacters}
                search={search}
                onSearchChange={handleSearchChange}
                house={house}
                onHouseChange={handleHouseChange}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
