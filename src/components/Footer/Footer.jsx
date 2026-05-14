import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner central-column">
        <p className="footer__copy">
          &copy;2026 Harry Potter DB &middot; Made with 🤍 by{' '}
          <a
            className="footer__author"
            href="https://github.com/CrisOnWeb"
            target="_blank"
            rel="noreferrer noopener"
          >
            @CrisOnWeb
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
