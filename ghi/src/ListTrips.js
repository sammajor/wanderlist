import React, { useEffect, useState } from "react";
import { useGetAllTripsQuery } from "./store/apiSlice";

const TripList = () => {
  const { data: trips } = useGetAllTripsQuery();
  return (
    <div className="list-container">
      <h2 className="list-title">My Upcoming Trips</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Park</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {trips?.map((trip) => {
            return (
              <tr key={trip.id}>
                <td>{trip.park}</td>
                <td>{trip.start_date}</td>
                <td>{trip.end_date}</td>
                {/* <td><button onClick={handleDelete} id={trip.id} className="btn btn-sm btn-danger">Delete</button></td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TripList;
