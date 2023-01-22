import React from "react";
import "./Pagination.scss";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";

// Pagination element
const Pagination = ({
  currentPage,
  setCurrentPage,
  totalMovies,
  moviesPerPage,
  setMoviesPerPage,
}) => {
  return (
    <div className="pagination">
      {/* Prev page button */}
      {currentPage !== 1 && (
        <button onClick={() => setCurrentPage(currentPage - 1)}>
          <RxDoubleArrowLeft />
        </button>
      )}

      {/* Movies per page Select element */}
      <div className="pagination__select">
        <label htmlFor="perpage-select">Movies per page:</label>
        <select
          name="amount"
          id="perpage-select"
          defaultValue="12"
          onChange={(e) => {
            setMoviesPerPage(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option disabled value="">
            --Choose amount--
          </option>
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
        </select>
      </div>

      {/* Next page button */}
      {currentPage !== Math.ceil(totalMovies / moviesPerPage) && (
        <button onClick={() => setCurrentPage(currentPage + 1)}>
          <RxDoubleArrowRight />
        </button>
      )}
    </div>
  );
};

export default Pagination;
