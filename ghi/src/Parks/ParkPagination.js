import React from "react";
import ParkCard from "./ParkCard";
import "./park.css";

const Pagination = (props) => {
  // HANDLES LOGIC TO DISPLAY PARK CARDS AND MANIPULATE PARK LIST COMPONENT //
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
  // FUNCTION TO HANDLE CHANGES TO UPPER LIMIT PAGE NUMBER //
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
  // FUNCTION TO HANDLE CHANGES TO LOWER LIMIT OF PAGE NUMBER //
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
  // FUNCTION TO HANDLE CLICKING PREVIOUS BUTTON //
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
// FUNCTION TO HANDLE CLICKING PAGE NUMBER BUTTON //
  const handlePageClick = (e) => {
    const { text } = e.target;
    const newId = Number(text);
    setDisplayParks(chunks[newId - 1]);
    setCurrentPage(newId);
  };
  // FUNCTION TO HANDLE CLICKING NEXT BUTTON //
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
  // POPULATES PAGE NUMBERS INTO LIST //
  for (let i = 1; i <= pageNumberLimit; i++) {
    pages.push(i);
  }
  // FUNCTION TO DISPLAY CURRENT RANGE OF PAGE NUMBERS AVAILABLE //
  const pageNumbers = pages.map((page) => {
    if (page <= maxPageLimit && page >= minPageLimit) {
      return (
        <li
          key={page}
          id={page}
          onClick={handlePageClick}
          className={currentPage === page ? "page-item-active " : null}
        >
          <a className="page-link pages-bkg" href="#">
            {page}
          </a>
        </li>
      );
    } else {
      return null;
    }
  });
  // LOGIC CONTROLLING UPPER ELLIPSES BUTTON //
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
  // LOGIC CONTROLLING LOWER ELLIPSES BUTTON //
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
// PASSES PROPS TO CHILD PARK CARD //
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
              park_id={park.park_id}
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
              park_id={park.park_id}
            />
          );
        })}{" "}
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button
              value={currentPage}
              className="btn btn-outline-success pagination-color"
              onClick={onPrevClick}
              disabled={currentPage === initMin}
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
              className="btn btn-outline-success pagination-color"
              onClick={onNextClick}
              disabled={currentPage === initMax}
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
