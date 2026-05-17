import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './CharacterDetailPage.scss';
import HeartIcon from '../../Icons/HeartIcon';
import MoonIcon from '../../Icons/MoonIcon';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Spinner from '../../Spinner/Spinner';
import HouseEmblem from '../../HouseEmblem/HouseEmblem';

const CharacterDetailPage = ({
  getCharacterById,
  onHouseChange,
  isLoading,
  currentHouse,
}) => {
  const params = useParams();

  const characterFound = getCharacterById(params.id);

  useEffect(() => {
    if (!characterFound) {
      if (params.house === 'unknown') {
        onHouseChange('all');
      } else if (params.house !== currentHouse) {
        onHouseChange(params.house);
      }
    }
  }, [characterFound, params.house, currentHouse, onHouseChange]);

  if (isLoading) {
    return (
      <div className="detail__loading-state" aria-live="polite">
        <Spinner />
        <p className="detail__loading-text">Loading character profile...</p>
      </div>
    );
  }

  if (!characterFound) {
    return <NotFoundPage />;
  }

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
                  <HouseEmblem house={characterFound.house} size="large" />
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
