import { Link } from 'react-router-dom';
import './CharacterCard.scss';
import Default from '../../assets/defaultCharacter.png';

const CharacterCard = () => {
  return (
    <Link className="characters__link">
      <img
        className="characters__img"
        src={'' || Default}
        alt={`Portrait of ${name}`}
      />
      <div className="characters__info">
        <h4 className="characters__name">Albus Dumbledore</h4>
        <p className="characters__species">Human</p>
        <p className="characters__house">Gryffindor</p>
      </div>
    </Link>
  );
};

export default CharacterCard;
