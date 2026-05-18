import { Link } from 'react-router-dom';
import './NotFoundPage.scss';
import ErrorImg from '../../../assets/error404.png';

const NotFoundPage = ({ text }) => {
  return (
    <>
      <header className="hero">
        <div className="hero__inner central-column">
          <h2 className="hero__title">
            <span className="hero__title--big">L</span>ost in{' '}
            <span className="hero__title--big">H</span>owarts
          </h2>
          <p className="hero__text">
            Looks like this page vanished somewhere between spells and secrets.
          </p>
        </div>
      </header>

      <section className="not-found">
        <div className="not-found__inner central-column">
          <img
            className="not-found__img"
            src={ErrorImg}
            alt="House-elf holding a broom next to a magical error scroll and books"
          />
          <h3 className="not-found__title">Mischief managed... badly</h3>
          <p className="not-found__text">{text}</p>
          <Link className="not-found__link" to="/">
            &laquo;Back to character directory
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
