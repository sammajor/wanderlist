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

              <div className="row justify-content-start">
                {notes?.map((note) => {
                  return (
                    <div className="col-2 col-sm-3 col-md-4" key={note.id}>
                      <NoteCard
                        key={note.id}
                        title={note.title}
                        description={note.description}
                        id={note.id}
                        handleCardClick={handleCardClick}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="row">
                <div>
                  <div className="row justify-content-center">
                    <button
                      onClick={handleCancel}
                      id={trip_id}
                      disabled={trip.trip_status === "Cancelled"}
                      className="carousel btn btn-sm btn-danger mx-2"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleComplete}
                      id={trip_id}
                      disabled={trip.trip_status === "Completed"}
                      className="carousel btn btn-sm btn-primary"
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
    </div>
  );
};
export default TripDetail;
