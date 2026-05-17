import './CharacterList.scss';
import { useId } from 'react';
import CharacterCard from './CharacterCard';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const CharacterList = ({ characters, search, isLoading, hasError }) => {
  const charactersID = useId();
  let content;

  if (isLoading) {
    content = (
      <div className="characters__loading-state">
        <Spinner />
        <p className="characters__loading-text">Loading characters...</p>
      </div>
    );
  } else if (hasError) {
    content = <ErrorMessage />;
  } else if (search.trim() && characters.length === 0) {
    content = (
      <p className="characters__empty">
        No characters found for{' '}
        <span className="characters__empty-search">&quot;{search}&quot;</span>.
      </p>
    );
  } else {
    content = (
      <ul className="characters__list">
        {characters.map((character) => (
          <li key={character.id} className="characters__card">
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section
      className="characters"
      aria-labelledby={charactersID}
      aria-live="polite"
      aria-relevant="all"
    >
      <div className="characters__inner central-column">
        <h3 className="characters__title" id={charactersID}>
          Characters
        </h3>
        {content}
      </div>
    </section>
  );
};

export default CharacterList;
