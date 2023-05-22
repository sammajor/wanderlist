import { format, parseISO } from "date-fns";
import React, { useState } from "react";
const initData = {
  park: "",
  start_date: "",
  end_date: "",
};

function TripList() {
  const [trips, setTrips] = useState(initData);

  return (
    <div>
      <h1>My UpComing Trips</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Park</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {/* #### FILTER TRIPS BY STATUS AND LOOP THROUGH #### */}
          {trips
            .filter((trip) => trip.status === "upcoming")
            .map((trip) => {
              // #### PARSE DATE TO DISPLAY IN TABLE ####
              let startDate = parseISO(trip.start_date);
              let endDate = parseISO(trip.end_date);

              return (
                <tr key={trip.id}>
                  <td>{trip.park}</td>
                  <td>{format(startDate, "MM/dd/yyyy")}</td>
                  <td>{format(endDate, "h:mm b")}</td>
                </tr>
              );
            })}
          ;
        </tbody>
      </table>
    </div>
  );
}
export default TripList;
