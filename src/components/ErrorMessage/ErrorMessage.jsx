import './ErrorMessage.scss';

const ErrorMessage = () => {
  return (
    <div className="error">
      <p className="error__text">
        Something went wrong while loading the characters.
      </p>
      <button className="error__btn" onClick={() => window.location.reload()}>
        Try again
      </button>
    </div>
  );
};

export default ErrorMessage;
