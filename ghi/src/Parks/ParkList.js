import React, { useState, useEffect } from "react";
import { useGetAllParksQuery } from "../store/apiSlice";
import { useSelector } from "react-redux";
import SearchBar from "../Search";
import Pagination from "./ParkPagination";
import { chunk } from "lodash";
import PaginationTwo from "./PaginationTwo";

const ParkList = () => {
  const { data, isLoading } = useGetAllParksQuery();
  const searchCriteria = useSelector((state) => state.parkSearch.value);

  const filteredParks = (data) => {
    if (!searchCriteria) return data;
    return data.filter((park) =>
      park.full_name.toLowerCase().includes(searchCriteria.toLowerCase())
    );
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageLimit, setMaxPageLimit] = useState(5);
  const [minPageLimit, setMinPageLimit] = useState(0);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [displayParks, setDisplayParks] = useState([]);

  const _ = require("lodash");
  const chunks = _.chunk(data, 20);

  const initParks = chunks[0];

  const onPageChange = (currentPage) => {
    setDisplayParks(chunks[currentPage]);
  };
  const onPrevClick = () => {
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageNumberLimit);
      setMinPageLimit(minPageLimit - pageNumberLimit);
    }

    setCurrentPage((prev) => prev - 1).then(onPageChange(currentPage));
  };

  const onNextClick = () => {
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageNumberLimit);
      setMinPageLimit(minPageLimit + pageNumberLimit);
    }
    setCurrentPage((prev) => prev + 1);
    onPageChange(currentPage);
  };

  useEffect(() => {
    setDisplayParks(initParks);
  }, [data, searchCriteria]);
  if (isLoading) return <div>...loading</div>;
  return (
    <div className="container">
      <h1>National Parks</h1>
      <SearchBar />
      <div className="row" data-masonry='{"percentPosition": true }'>
        {!isLoading ? (
          <Pagination
            currentPage={currentPage}
            onPrevClick={onPrevClick}
            onNextClick={onNextClick}
            onPageChange={onPageChange}
            maxPageLimit={maxPageLimit}
            minPageLimit={minPageLimit}
            displayParks={displayParks}
            filteredParks={filteredParks}
            pageNumberLimit={pageNumberLimit}
            data={data}
            searchCriteria={searchCriteria}
          />
        ) : (
          <div> Loading... </div>
        )}
      </div>
    </div>
  );
};
export default ParkList;
