import './Header.scss';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner central-column">
        <img
          className="header__logo"
          src={Logo}
          alt="Logo con una H de Hogwarts"
        />
        <h1 className="header__title">
          <span className="header__title--big">H</span>arry
          <span className="header__title--big"> P</span>otter
          <span className="header__title--big"> DB</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
