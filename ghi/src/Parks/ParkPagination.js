import React from "react";
import { useState } from "react";
import ParkCard from "./ParkCard";
import "./park.css";

const Pagination = (props) => {
  const {
    currentPage,
    maxPageLimit,
    minPageLimit,
    displayParks,
    filteredParks,
    pageNumberLimit,
    data,
    searchCriteria,
    setMaxPageLimit,
    setMinPageLimit,
    setCurrentPage,
    setDisplayParks,
    chunks,
  } = props;

  const pages = [];

  const onPageChange = (newId) => {
    setDisplayParks(chunks[newId - 1]);
  };

  const onPrevClick = (e) => {
    const { value } = e.target;
    const newId = Number(value) - 1;

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageNumberLimit);
      setMinPageLimit(minPageLimit - pageNumberLimit);
    }
    setCurrentPage(newId);
    onPageChange(newId);
  };

  const handlePageClick = (e) => {
    const { text } = e.target;
    const newId = Number(text);
    onPageChange(newId);
  };
  const onNextClick = (e) => {
    const { value } = e.target;
    const newValue = Number(value) + 1;

    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageNumberLimit);
      setMinPageLimit(minPageLimit + pageNumberLimit);
    }

    setCurrentPage(newValue);
    onPageChange(newValue);
  };
  for (let i = 1; i <= pageNumberLimit; i++) {
    pages.push(i);
  }
  const pageNumbers = pages.map((page) => {
    if (page <= maxPageLimit && page > minPageLimit) {
      return (
        <li
          key={page}
          id={page}
          onClick={handlePageClick}
          className={currentPage === page ? "page-item-active" : null}
        >
          <a className="page-link" href="#">
            {page}
          </a>
        </li>
      );
    } else {
      return null;
    }
  });
  let pageIncrementEllipses = null;

  if (pages.length > maxPageLimit) {
    pageIncrementEllipses = <li onClick={onNextClick}>&hellip;</li>;
  }

  let pageDecrementEllipses = null;
  if (minPageLimit >= 1) {
    pageDecrementEllipses = <li onClick={onPrevClick}>&hellip;</li>;
  }

  return (
    <>
      {searchCriteria &&
        filteredParks(data)?.map((park) => {
          return (
            <ParkCard
              key={park.park_id}
              park_image={park.park_image}
              full_name={park.full_name}
              city={park.city}
              state={park.state}
              description={park.description}
            />
          );
        })}{" "}
      {!searchCriteria &&
        displayParks?.map((park) => {
          return (
            <ParkCard
              key={park.park_id}
              park_image={park.park_image}
              full_name={park.full_name}
              city={park.city}
              state={park.state}
              description={park.description}
            />
          );
        })}{" "}
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button
              value={currentPage}
              className="btn btn-outline-primary"
              onClick={onPrevClick}
              disabled={currentPage === pages[0]}
            >
              Prev
            </button>
          </li>
          {pageDecrementEllipses}
          {pageNumbers}
          {pageIncrementEllipses}
          <li className="page-item">
            <button
              value={currentPage}
              className="btn btn-outline-primary"
              onClick={onNextClick}
              disabled={currentPage === pages[pages.length - 1]}
            >
              &gt;Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
