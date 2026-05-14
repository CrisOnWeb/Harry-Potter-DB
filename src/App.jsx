// import { useState, useEffect } from 'react';
import './App.scss';
import CharacterList from './components/CharacterList/CharacterList';
import Filters from './components/Filters/Filters';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import fetchData from '/services/api';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <header className="hero central-column">
          <h2 className="hero__title">
            <span className="hero__title--big">C</span>haracter{' '}
            <span className="hero__title--big">D</span>irectory
          </h2>
          <p className="hero__text">Explore the wizarding world</p>
        </header>
        <Filters />
        <CharacterList />
      </main>
      <Footer />
    </>
  );
}

export default App;
