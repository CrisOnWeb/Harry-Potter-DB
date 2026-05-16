import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './CharacterDetailPage.scss';
import GryffindorIcon from '../../../assets/Gryffindor.png';
import SlytherinIcon from '../../../assets/Slytherin.webp';
import RavenclawIcon from '../../../assets/Ravenclaw.webp';
import HufflepuffIcon from '../../../assets/Hufflepuff.webp';
import HeartIcon from '../../Icons/HeartIcon';
import MoonIcon from '../../Icons/MoonIcon';
import DefaultIcon from '../../Icons/DefaultIcon';

const CharacterDetailPage = ({ getCharacterById, onHouseChange }) => {
  const params = useParams();

  const characterFound = getCharacterById(params.id);

  useEffect(() => {
    if (!characterFound) {
      if (params.house === 'unknown') {
        onHouseChange('all');
      } else if (params.house !== 'gryffindor') {
        onHouseChange(params.house);
      }
    }
  }, [characterFound, params.house, onHouseChange]);

  if (!characterFound) {
    return <p className="detail__loading">Loading...</p>;
  }

  const houseIcons = {
    gryffindor: GryffindorIcon,
    slytherin: SlytherinIcon,
    ravenclaw: RavenclawIcon,
    hufflepuff: HufflepuffIcon,
  };

  const HouseIcon = houseIcons[characterFound.house?.toLocaleLowerCase()];

  return (
    <>
      <header className="hero">
        <div className="hero__inner central-column">
          <h2 className="hero__title">
            <span className="hero__title--big">C</span>haracter{' '}
            <span className="hero__title--big">P</span>rofile
          </h2>
          <p className="hero__text">
            Explore detailed information about each Hogwarts character.
          </p>
        </div>
      </header>

      <article className="detail">
        <div
          className={`detail__inner central-column ${characterFound.house.toLocaleLowerCase()}`}
        >
          <img
            className="detail__img"
            src={characterFound.image}
            alt={`Portrait of ${characterFound.name}`}
          />
          <section className="detail__content">
            <h3 className="detail__name">{characterFound.name}</h3>
            <dl className="detail__list">
              <div className="detail__item detail__item--big">
                <dt className="detail__label">Alternate names</dt>
                <dd className="detail__value">
                  {characterFound.alternateNames.length === 0
                    ? 'No known alternate names'
                    : characterFound.alternateNames.join(', ')}
                </dd>
              </div>
              <div className="detail__item detail__item--small">
                <dt className="detail__label">Gender</dt>
                <dd className="detail__value">{characterFound.gender}</dd>
              </div>
              <div className="detail__item detail__item--small">
                <dt className="detail__label">Species</dt>
                <dd className="detail__value">{characterFound.species}</dd>
              </div>
              <div className="detail__item detail__item--small">
                <dt className="detail__label">House</dt>
                <dd className="detail__value detail__value--with-icon">
                  {HouseIcon ? (
                    <img
                      className="emblem-icon"
                      src={HouseIcon}
                      alt=""
                      aria-hidden="true"
                    />
                  ) : (
                    <DefaultIcon />
                  )}
                  {characterFound.house}
                </dd>
              </div>
              <div className="detail__item detail__item--small">
                <dt className="detail__label">Status</dt>
                <dd className="detail__value detail__value--with-icon">
                  {characterFound.alive ? <HeartIcon /> : <MoonIcon />}
                  {characterFound.alive ? 'alive' : 'deceased'}
                </dd>
              </div>
            </dl>
            <Link className="detail__link" to="/">
              {' '}
              &laquo; Back to the list
            </Link>
          </section>
        </div>
      </article>
    </>
  );
};

export default CharacterDetailPage;
