import { useParams } from "react-router-dom";
import {
  useGetTripQuery,
  useGetAllTripNotesQuery,
  useCancelTripMutation,
  useCompleteTripMutation,
} from "../store/apiSlice";
import Carousel from "./Carousel";
import "./carousel.css";
import NoteCard from "./NoteCard";
import { useNavigate } from "react-router-dom";

const TripDetail = () => {
  const { trip_id } = useParams();
  const { data: trip, isLoading } = useGetTripQuery(trip_id);
  const { data: notes } = useGetAllTripNotesQuery(trip_id);
  const navigate = useNavigate();
  const [cancel] = useCancelTripMutation();
  const [complete] = useCompleteTripMutation();

  const handleCardClick = (e) => {
    const { id } = e.target;
    navigate(`/trips/${trip_id}/notes/${id}`);
  };

  const handleComplete = () => {
    const body = {
      trip_status: "Completed",
      trip_id: trip_id,
    };
    complete(body);
  };

  const handleCancel = () => {
    const body = {
      trip_status: "Cancelled",
      trip_id: trip_id,
    };
    cancel(body);
  };
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <div className="container">
        <div className="card-header">My Trip to {trip?.park}</div>
        <div className="subheader">
          {trip?.start_date} - {trip?.end_date}
        </div>
        <div className="card-body">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <Carousel className="col" />
              </div>

              <div className="row justify-content-end">
                {notes?.map((note) => {
                  return (
                    <NoteCard
                      key={note.id}
                      title={note.title}
                      description={note.description}
                      id={note.id}
                      handleCardClick={handleCardClick}
                    />
                  );
                })}
              </div>
              <div className="row">
                <div>
                  <button
                    onClick={handleCancel}
                    id={trip_id}
                    disabled={trip.trip_status === "Cancelled"}
                    className="btn btn-sm btn-danger"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleComplete}
                    id={trip_id}
                    disabled={trip.trip_status === "Completed"}
                    className="btn btn-sm btn-primary"
                  >
                    Complete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TripDetail;
