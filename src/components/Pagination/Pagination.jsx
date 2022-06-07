import React from 'react';
import ReactPaginate from 'react-paginate';

export const Pagination = ({
  info,
  pageNumber,
  setPageNumber,
}) => {
  return (
    <ReactPaginate
      className="pagination gap-2 my-5 d-flex justify-content-center"
      forcePage={
        pageNumber === 1
            ? 0
            : pageNumber - 1
      }
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="btn btn-outline-primary"
      previousClassName="btn btn-outline-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data) => {
        setPageNumber(data.selected + 1)}}
      pageCount={info?.pages}
    />
  );
};
