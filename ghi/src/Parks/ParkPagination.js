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
    initMin,
    initMax,
  } = props;

  const pages = [];
  const onPageRangeIncrease = () => {
    if (maxPageLimit + 5 <= pages.length) {
      const newMaxLimit = maxPageLimit + 5;
      setMaxPageLimit(newMaxLimit);
    } else {
      const newMaxLimit = maxPageLimit + (pages.length - maxPageLimit);
      setMaxPageLimit(newMaxLimit);
    }

    const newMinLimit = minPageLimit + 5;
    setMinPageLimit(newMinLimit);
  };
  const onPageRangeDecrease = () => {
    const newMaxLimit = maxPageLimit - 5;
    if (minPageLimit - 5 > initMin) {
      const newMinLimit = minPageLimit - 5;
      setMinPageLimit(newMinLimit);
    } else if (minPageLimit - 5 <= initMin) {
      setMinPageLimit(initMin);
    }
    setMaxPageLimit(newMaxLimit);
  };
  const onPrevClick = (e) => {
    const { value } = e.target;
    const newId = Number(value) - 1;

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageNumberLimit);
      setMinPageLimit(minPageLimit - pageNumberLimit);
    }
    setCurrentPage(newId);
    setDisplayParks(chunks[newId - 1]);
  };

  const handlePageClick = (e) => {
    const { text } = e.target;
    const newId = Number(text);
    setDisplayParks(chunks[newId - 1]);
  };
  const onNextClick = (e) => {
    const { value } = e.target;
    const newValue = Number(value) + 1;

    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageNumberLimit);
      setMinPageLimit(minPageLimit + pageNumberLimit);
    }

    setCurrentPage(newValue);
    setDisplayParks(chunks[newValue - 1]);
  };
  for (let i = 1; i <= pageNumberLimit; i++) {
    pages.push(i);
  }
  const pageNumbers = pages.map((page) => {
    if (page <= maxPageLimit && page >= minPageLimit) {
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
  let pageIncrementEllipses;

  if (pages.length > maxPageLimit) {
    pageIncrementEllipses = (
      <li
        className={maxPageLimit < pages.length ? "page-item-active" : null}
        onClick={onPageRangeIncrease}
      >
        &hellip;
      </li>
    );
  }

  let pageDecrementEllipses;
  if (minPageLimit >= 2) {
    pageDecrementEllipses = (
      <li
        className={minPageLimit >= 1 ? "page-item-active" : null}
        onClick={onPageRangeDecrease}
      >
        &hellip;
      </li>
    );
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
              disabled={currentPage == initMin}
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
              disabled={currentPage == initMax}
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
