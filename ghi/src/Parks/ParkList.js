import React, { useState } from "react";
import { useGetAllParksQuery } from "../store/apiSlice";
import { useSelector } from "react-redux";
import SearchBar from "../Search";
import Pagination from "./ParkPagination";

const ParkList = () => {
  const { data, isLoading } = useGetAllParksQuery();
  const searchCriteria = useSelector((state) => state.parkSearch.value);
  console.log(data, isLoading);
  const filteredParks = (data) => {
    if (!searchCriteria) return data;
    return data.filter((park) =>
      park.full_name.toLowerCase().includes(searchCriteria.toLowerCase())
    );
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageLimit, setMaxPageLimit] = useState(30);
  const [minPageLimit, setMinPageLimit] = useState(0);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const onPrevClick = () => {
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageNumberLimit);
      setMinPageLimit(minPageLimit - pageNumberLimit);
    }
    setCurrentPage((prev) => prev - 1);
  };

  const onNextClick = () => {
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageNumberLimit);
      setMinPageLimit(minPageLimit + pageNumberLimit);
    }
    setCurrentPage((prev) => prev + 1);
  };
  // const paginationAttributes = {
  //     currentPage,
  //     maxPageLimit,
  //     minPageLimit,
  //     data: filteredParks().data,

  //   }

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
            data={data}
            filteredParks={filteredParks}
          />
        ) : (
          <div> Loading... </div>
        )}
      </div>
    </div>
  );
};
export default ParkList;
