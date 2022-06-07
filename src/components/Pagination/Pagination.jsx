import React from 'react';

export const Pagination = ({ setPageNumber, pageNumber }) => {
  let prev = () => {
    if (pageNumber === 1) return;

    setPageNumber(prevPage => prevPage - 1)
  };

  let next = () => {
    setPageNumber(prevPage => prevPage + 1)
  };

  return (
    <div className="d-flex justify-content-center gap-5">
      <button
        className="btn btn-primary"
        onClick={prev}
      >
        Prev
      </button>
        {pageNumber}
      <button
        className="btn btn-primary"
        onClick={next}
      >
        Next
      </button>
    </div>
  );
};
