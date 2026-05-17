import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/Pages/HomePage/HomePage';
import CharacterDetail from './components/Pages/CharacterDetailPage/CharacterDetailPage';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';
import getCharacters from './services/api';

function App() {
  // SECCIÓN ESTADO
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [house, setHouse] = useState('gryffindor');
  const [gender, setGender] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // SECCIÓN USE-EFFECT
  useEffect(() => {
    // Variable de control para saber si esta petición sigue siendo la válida o se ha solicitado un nuevo fetch
    let isCurrentRequest = true;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);

    getCharacters(house)
      .then((data) => {
        // Solo guardamos los datos si la petición no se ha cancelado/solapado con otra petición posterior
        if (isCurrentRequest) {
          setCharacters(data);
        }
      })
      .finally(() => {
        // Solo quitamos el spinner si esta era la última petición válida
        if (isCurrentRequest) {
          setIsLoading(false);
        }
      });

    // Esta función de limpieza se ejecuta automáticamente si 'house' cambia parando el proceso
    // Esto evita que salte la página NotFoundPage en CharacterDetailPage entre fetchs
    return () => {
      isCurrentRequest = false;
    };
  }, [house]);

  // SECCIÓN FUNCIONES DE EVENTOS
  const handleSearchChange = (value) => {
    setSearch(value);
  };

  const handleHouseChange = (value) => {
    setHouse(value);
  };

  const handleGenderChange = (value) => {
    setGender(value);
  };

  const handleResetFilters = () => {
    setSearch('');
    setHouse('gryffindor');
    setGender('all');
  };

  // SECCIÓN HELPERS
  const normalizeText = (text) => {
    return text
      .toLocaleLowerCase() // minúsculas
      .trim(); // elimina espacios
  };

  const searchedText = normalizeText(search);

  const filteredCharacters = characters
    .filter((character) => {
      const matchesSearch = !searchedText
        ? // Si search está vacío, devuelve true siempre (comprobación explícita aunque lo haga includes())
          true
        : // Si no, filtro por el contenido de search y devuelvo true si coinciden
          normalizeText(character.name).includes(searchedText);

      const matchesGender =
        gender === 'all'
          ? // Con 'all' devuelvo siempre true
            true
          : // Si no, filtro por el filtro y devuelvo true si coinciden
            character.gender === gender;

      // Solo devuelvo los personajes que cumplan ambas condiciones (ambos true)
      return matchesSearch && matchesGender;
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  const getCharacterById = (id) => {
    return characters.find((character) => character.id === id);
  };

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route
            index
            element={
              <HomePage
                characters={filteredCharacters}
                search={search}
                onSearchChange={handleSearchChange}
                house={house}
                onHouseChange={handleHouseChange}
                gender={gender}
                onGenderChange={handleGenderChange}
                onResetFilters={handleResetFilters}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path={'/character/:house/:id'}
            element={
              <CharacterDetail
                getCharacterById={getCharacterById}
                onHouseChange={handleHouseChange}
                isLoading={isLoading}
                currentHouse={house}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
