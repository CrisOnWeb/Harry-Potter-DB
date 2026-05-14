import './HomePage.scss';
import CharacterList from '../../CharacterList/CharacterList';
import Filters from '../../Filters/Filters';
const HomePage = () => {
  return (
    <>
      <header className="hero central-column">
        <h2 className="hero__title">
          <span className="hero__title--big">C</span>haracter{' '}
          <span className="hero__title--big">D</span>irectory
        </h2>
        <p className="hero__text">Explore the wizarding world</p>
      </header>
      <Filters />
      <CharacterList />;
    </>
  );
};

export default HomePage;
