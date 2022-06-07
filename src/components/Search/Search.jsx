import React from 'react';
import styles from './Search.module.scss';
import classNames from "classnames";

export const Search = ({ search, setSearch, setPageNumber }) => {
  const onInputChangeHandler = (event) => {
    setSearch(event.target.value);
    setPageNumber(1);
  }

  return (
    <form
      className="d-flex justify-content-center gap-4 mb-4"
    >
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search for Characters"
        value={search}
        onChange={event => onInputChangeHandler(event)}
      />

      <button
        className={classNames(
          "btn btn-primary fs-5",
          styles.searchBtn,
        )}
        onClick={event => {
          event.preventDefault();
        }}
      >
        Search
      </button>
    </form>
  );
};
