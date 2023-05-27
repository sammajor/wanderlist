import React from "react";
import { useState, useContext } from "react";
import ParkCard from "./ParkCard";
import "./park.css";
import { ParksContext } from "./Context";

const PaginationTwo = (props) => {
  const {
    currentPage,
    onPrevClick,
    onNextClick,
    onPageChange,
    maxPageLimit,
    minPageLimit,
    displayParks,
    filteredParks,
    pageNumberLimit,
    data,
    searchCriteria,
    chunks,
  } = props;
  const [totalPages, setTotalPages] = useState(5);
  const pages = [];
  const allParks = useContext(ParksContext);
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  const pageNumbers = pages.map((page) => {
    if (page <= maxPageLimit && page > minPageLimit) {
      return (
        <li
          key={page}
          id={page}
          onClick={onPageChange}
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
  console.log(searchCriteria);
  const parkLoop = () => {
    if (!searchCriteria) {
      filteredParks(displayParks).map((park) => {
        console.log(park);
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
      });
    } else if (searchCriteria) {
      data?.map((park) => {
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
      });
    }
  };
  return (
    <>
      {parkLoop()}
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button
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

export default PaginationTwo;
