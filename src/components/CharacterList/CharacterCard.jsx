import { Link } from 'react-router-dom';
import './CharacterCard.scss';
import Default from '../../assets/defaultCharacter.png';

const CharacterCard = ({ character }) => {
  return (
    <Link className="characters__link">
      <img
        className="characters__img"
        src={character.image}
        alt={`Portrait of ${character.name}`}
      />
      <div className="characters__info">
        <h4 className="characters__name">{character.name}</h4>
        <p className="characters__species">{character.species || 'Unknown'}</p>
        <p className="characters__house">{character.house || 'Unknown'}</p>
      </div>
    </Link>
  );
};

export default CharacterCard;
