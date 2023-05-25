// import React, { useEffect, useState } from "react";
import { useGetAllParksQuery } from "../store/apiSlice";
import { useSelector } from "react-redux";
import SearchBar from "../Search";


const ParkList = () => {
  const { data, isLoading } = useGetAllParksQuery();
  const searchCriteria = useSelector((state) => state.parkSearch.value);
  console.log(data, isLoading)
  const filteredParks = () => {
    if (!searchCriteria) return data;
    return data.filter(park => park.full_name.toLowerCase().includes(searchCriteria.toLowerCase()))
  }
  if (isLoading) return<div>...loading</div>
  return (
    <div className="container">
      <h1>National Parks</h1>
      < SearchBar/>
      <div className="row" data-masonry='{"percentPosition": true }'>
        {filteredParks().map((park) => {
          console.log(park)
          return (
            <div
              key={park.park_id}
              className="card my-3 mx-5 shadow"
              style={{ width: "300px" }}
            >
              <img
                src={park.park_image}
                alt="park pic"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{park.full_name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {park.city}, {park.state}
                </h6>
                <p className="card-text">{park.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// const ParkList = () => {
//   const [parkcolumns, setParkColumns] = useState([[], [], []]);
//   const { data } = useGetAllParksQuery();

//   try {
//     // Set up the "columns" to put the conference
//     // information into
//     let columns = [[], [], []];

//     // Loop over the conference detail responses and add
//     // each to to the proper "column" if the response is
//     // ok
//     let i = 0;
//     for (const park of data) {
//       columns[i].push(park);
//       i = i + 1;
//       if (i > 2) {
//         i = 0;
//       }
//     }
//     // Set the state to the new list of three lists of
//     // conferences
//     setParkColumns(columns);
//   } catch (e) {
//     console.error(e);
//   }
//   console.log(parkcolumns);
//   useEffect(() => {}, []);

//   return (
//     <>
//       {/* <div className="px-4 py-5 my-5 mt-0 text-center bg-info">
//         <img className="bg-white rounded shadow d-block mx-auto mb-4" src="/logo.svg" alt="" width="600" />
//         <h1 className="display-5 fw-bold">Conference GO!</h1>
//         <div className="col-lg-6 mx-auto">
//           <p className="lead mb-4">
//             The only resource you'll ever need to plan an run your in-person or
//             virtual conference for thousands of attendees and presenters.
//           </p>
//           <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
//             <Link to="/attendees/new" className="btn btn-primary btn-lg px-4 gap-3">Attend a conference</Link>
//           </div>
//         </div>
//       </div> */}
//       <div className="container">
//         <h2>National Parks</h2>
//         <div className="row">
//           {parkcolumns?.map((park, index) => {
//             return <ParksColumns key={index} list={park} />;
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

export default ParkList;
