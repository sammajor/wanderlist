import { useGetAllTripsQuery } from "../store/apiSlice";
import { useNavigate } from "react-router-dom";

const TripList = () => {
  // HANDLES STATE VARIABLES AND NAVIGATION; ACCESSES SLICE FOR TRIPS //
  const { data: trips, isLoading } = useGetAllTripsQuery();
  const navigate = useNavigate();
  // FUNCTION TO HANDLE NAVIGATION TO INDIVIDUAL TRIP DETAILS BASED ON TRIP INSTANCE SELECTED //
  const handleClick = (e) => {
    const { value } = e.target;
    navigate(`/trips/${value}/`);
  };
  // FUNCTION TO FILTER TRIPS WITH PENDING STATUS AND EXCLUSIVELY DISPLAY THOSE TRIPS //
  const filteredTripList = () => {
    return trips?.filter((trip) => {
      return trip.trip_status === "Pending";
    });
  };
  if (isLoading) return <div>Loading...</div>;
  // RENDERED COMPONENT TO SHOW LISTED PARKS, START & END DATES, AND BUTTON TO ACCESS TRIP DETAILS FOR ALL TRIPS OF STATUS: PENDING //
  return (
    <>
      <div
        className="container"
        style={{ position: "relative", height: "900px" }}
      >
        <div className="trip-list-header">
          <h2 className="trip-title-line mb-3">My Upcoming Trips</h2>
        </div>

        <div className="card mx-auto mt-2" style={{ width: "62rem" }}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Park</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>See Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredTripList().map((trip) => {
                return (
                  <tr key={trip.id}>
                    <td>{trip.park}</td>
                    <td>{trip.start_date}</td>
                    <td>{trip.end_date}</td>
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

export default TripList;
