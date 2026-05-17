import './HouseEmblem.scss';
import GryffindorIcon from '../../assets/Gryffindor.png';
import SlytherinIcon from '../../assets/Slytherin.webp';
import RavenclawIcon from '../../assets/Ravenclaw.webp';
import HufflepuffIcon from '../../assets/Hufflepuff.webp';
import DefaultIcon from '../Icons/DefaultIcon';

const HouseEmblem = ({ house, size }) => {
  const houseIcons = {
    gryffindor: GryffindorIcon,
    slytherin: SlytherinIcon,
    ravenclaw: RavenclawIcon,
    hufflepuff: HufflepuffIcon,
  };

  const HouseIcon = houseIcons[house?.toLowerCase()];
  return (
    <>
      {HouseIcon ? (
        <img
          className={`emblem-icon--${size}`}
          src={HouseIcon}
          alt=""
          aria-hidden="true"
        />
      ) : (
        <DefaultIcon />
      )}
    </>
  );
};

export default HouseEmblem;
