import './Filters.scss';
import { useId } from 'react';

const Filters = () => {
  const filtersID = useId();
  const noticeID = useId();
  return (
    <section className="filters" aria-labelledby={filtersID}>
      <div className="filters__inner central-column">
        <div className="filters__title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="filters__title-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
          <h3 className="filters__title-text" id={filtersID}>
            Filters
          </h3>
        </div>
        <form className="filters__form" aria-describedby={noticeID}>
          <p className="sr-only" id={noticeID}>
            This form automatically filter the results as you type or change any
            option.
          </p>
          <div className="filters__group">
            <label className="filters__label" htmlFor="search">
              Search by name
            </label>
            <input
              className="filters__search"
              type="search"
              name="search"
              id="search"
              placeholder="Search a character..."
            />
          </div>

          <div className="filters__group">
            <label className="filters__label" htmlFor="house">
              House
            </label>
            <select className="filters__select" name="house" id="house">
              <option value="gryffindor">Gryffindor</option>
              <option value="slytherin">Slytherin</option>
              <option value="ravenclaw">Ravenclaw</option>
              <option value="hufflepuff">Hufflepuff</option>
            </select>
          </div>

          <div className="filters__group">
            <label className="filters__label" htmlFor="gender">
              Gender
            </label>
            <select className="filters__select" name="gender" id="gender">
              <option value="all">All</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
          <button
            className="filters__reset-btn"
            title="Reset the search fields"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="filters__reset-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            <span className="filters__reset-label">Reset filters</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Filters;
