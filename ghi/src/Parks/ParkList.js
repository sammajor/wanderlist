import React, { useState, useEffect } from "react";
import { useGetAllParksQuery } from "../store/apiSlice";
import { useSelector } from "react-redux";
import SearchBar from "./Search";
import Pagination from "./ParkPagination";

const ParkList = () => {
  //  SET STATE VARIABLES AND ACCESS SLICE OF STATE FOR PARKS, AND SEARCH TERM //
  const { data, isLoading } = useGetAllParksQuery();
  // LOGIC TO ALLOW PARKS RENDERED IN PARK LIST COMPONENT BASED ON TYPED USER INPUT WHEN RECORD IN DATABASE IS MATCHED //
  const searchCriteria = useSelector((state) => state.parkSearch.value);
  const filteredParks = (data) => {
    if (!searchCriteria) return data;
    return data.filter((park) =>
      park.full_name.toLowerCase().includes(searchCriteria.toLowerCase())
    );
  };
  // LOGIC TO ALLOW PARK DISPLAY BROKEN UP INTO UNIFORM PAGES REQUIRED //
  const initMin = 1;
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageLimit, setMaxPageLimit] = useState(24);
  const [minPageLimit, setMinPageLimit] = useState(initMin);
  const [pageNumberLimit, setPageNumberLimit] = useState(24);
  const [displayParks, setDisplayParks] = useState([]);

  const _ = require("lodash");
  const chunks = _.chunk(data, 20);
  const initMax = chunks.length;
  const initParks = chunks[0];

  // USING DATA AND SEARCH CRITERIA DEPENDENCIES, CAUSE FIRST CHUNK OF DATA TO DISPLAY TO USER //
  useEffect(() => {
    setDisplayParks(initParks);
    setPageNumberLimit(chunks.length);
  }, [data, searchCriteria]);

  if (isLoading) return <div>...loading</div>;

  // PARENT COMPONENT -- PASSES PROPS TO PAGINATION AND DISPLAYS PARK CARDS //
  return (
    <div className="container">
      <div className="title-background mb-5">
        <h1
          className="title-line mb-3"
          style={{ position: "absolute", left: "2px", top: "2px" }}
        >
          National Parks
        </h1>
        <SearchBar />
      </div>
      <div className="row" data-masonry='{"percentPosition": true }'>
        {!isLoading ? (
          <Pagination
            currentPage={currentPage}
            maxPageLimit={maxPageLimit}
            minPageLimit={minPageLimit}
            displayParks={displayParks}
            filteredParks={filteredParks}
            pageNumberLimit={pageNumberLimit}
            data={data}
            searchCriteria={searchCriteria}
            setMaxPageLimit={setMaxPageLimit}
            setMinPageLimit={setMinPageLimit}
            setCurrentPage={setCurrentPage}
            setDisplayParks={setDisplayParks}
            chunks={chunks}
            initMin={initMin}
            initMax={initMax}
          />
        ) : (
          <div> Loading... </div>
        )}
      </div>
    </div>
  );
};

export default ParkList;
