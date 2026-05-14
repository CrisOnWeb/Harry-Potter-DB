import './CharacterList.scss';
import { useId } from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = ({ characters, search }) => {
  const charactersID = useId();
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
        {search.trim() && characters.length === 0 ? (
          <p className="characters__empty">
            No characters found for{' '}
            <span className="characters__empty-search">
              &quot;{search}&quot;
            </span>
            .
          </p>
        ) : (
          <ul className="characters__list">
            {characters.map((character) => (
              <li key={character.id} className="characters__card">
                <CharacterCard character={character} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default CharacterList;
