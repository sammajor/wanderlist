import { useGetAllTripsQuery } from "../store/apiSlice";
import { useNavigate } from "react-router-dom";

const TripHistoryList = () => {
  // SETS STATE VARIABLE AND NAVIGATION; ACCESSES SLICE FOR TRIPS //
  const { data: trips, isLoading } = useGetAllTripsQuery();
  const navigate = useNavigate();
  // FUNCTION TO HANDLE NAVIGATION TO TRIP DETAILS PAGE BASED ON SELECTED TRIP INSTANCE //
  const handleClick = (e) => {
    const { value } = e.target;
    navigate(`/trips/${value}/`);
  };
  // FUNCTION TO HANDLE FILTERING OUT ALL TRIPS WITH STATUS: PENDING; ONLY DISPLAYS TRIPS WITH STATUS 'CANCELED' OR 'COMPLETED' //
  const filteredTrips = () => {
    return trips.filter((trip) => {
      return trip.trip_status !== "Pending";
    });
  };
  if (isLoading) return <div>Loading...</div>;
  // RENDERED COMPONENT TO DISPLAY PARK, START & END DATES, AND CANCELED OR COMPLETED TRIPS STATUSES, ALONG WITH BUTTON TO VIEW TRIP DETAILS PER TRIP INSTANCE //
  return (
    <>
      <div
        className="container"
        style={{ position: "relative", height: "900px" }}
      >
        <div className="trip-list-header">
          <h2 className="trip-title-line mb-3">My Trip History</h2>
        </div>

        <div className="card mx-auto mt-2" style={{ width: "62rem" }}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Park</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Trip Status</th>
                <th>See Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredTrips().map((trip) => {
                return (
                  <tr key={trip.id}>
                    <td>{trip.park}</td>
                    <td>{trip.start_date}</td>
                    <td>{trip.end_date}</td>
                    <td>{trip.trip_status}</td>
                    <td>
                      <button
                        value={trip.id}
                        type="button"
                        onClick={handleClick}
                        className="btn btn-trip-detail"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TripHistoryList;
