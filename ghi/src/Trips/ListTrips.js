import { useGetAllTripsQuery } from "../store/apiSlice";
import { useNavigate } from "react-router-dom";

const TripList = () => {
  const { data: trips, isLoading } = useGetAllTripsQuery();
  console.log(trips);
  const navigate = useNavigate();
  const handleClick = (e) => {
    const { value } = e.target;
    navigate(`/trips/${value}/`);
  };
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="list-container">
      <h2 className="list-title">My Upcoming Trips</h2>
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
          {trips?.map((trip) => {
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
                    className="btn btn-success"
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
  );
};

export default TripList;
