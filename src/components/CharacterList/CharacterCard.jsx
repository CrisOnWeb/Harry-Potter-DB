import { Link } from 'react-router-dom';
import './CharacterCard.scss';
import Default from '../../assets/defaultCharacter.png';
import HouseEmblem from '../HouseEmblem/HouseEmblem';

const CharacterCard = ({ character }) => {
  return (
    <Link
      to={`/character/${character.house.toLocaleLowerCase()}/${character.id}`}
      className="characters__link"
    >
      <img
        className="characters__img"
        src={character.image}
        alt={`Portrait of ${character.name}`}
      />
      <div className="characters__info">
        <h4 className="characters__name">{character.name}</h4>
        <p className="characters__species">{character.species}</p>
        <p
          className={`characters__house characters__${character.house.toLocaleLowerCase()}`}
        >
          <HouseEmblem house={character.house} size="small" />
          {character.house}
        </p>
      </div>
    </Link>
  );
};

export default CharacterCard;
