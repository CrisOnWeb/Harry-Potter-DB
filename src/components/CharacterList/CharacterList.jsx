import './CharacterList.scss';
import { useId } from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = () => {
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
        <ul className="characters__list">
          <li className="characters__card">
            <CharacterCard />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CharacterList;
