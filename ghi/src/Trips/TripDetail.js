import { useParams } from "react-router-dom";
import {
  useGetTripQuery,
  useGetAllTripNotesQuery,
  useCancelTripMutation,
  useCompleteTripMutation,
} from "../store/apiSlice";
import "./carousel.css";
import NoteCard from "./NoteCard";
import { useNavigate } from "react-router-dom";

const TripDetail = () => {
  // HANDLES STATE VARIABLES AND NAVIGATION; ACCESSES SLICE FOR TRIPS AND TRIPNOTES //
  const { trip_id } = useParams();
  const { data: trip, isLoading } = useGetTripQuery(trip_id);
  const { data: notes } = useGetAllTripNotesQuery(trip_id);
  const navigate = useNavigate();
  const [cancel] = useCancelTripMutation();
  const [complete] = useCompleteTripMutation();

  // FUNCTION TO NAVIGATE USER TO TRIPNOTE DETAILS BASED ON TRIPNOTE CARD SELECTED ///
  const handleCardClick = (e) => {
    const { id } = e.target;
    navigate(`/trips/${trip_id}/notes/${id}`);
  };

  // FUNCTION TO HANDLE USER CLICK OF COMPLETED BUTTON, ALTERING TRIP STATUS AND NO LONGER DISPLAYING ON MY UPCOMING TRIPS PAGE; NAVIGATES TO TRIP HISTORY PAGE //
  const handleComplete = () => {
    const body = {
      trip_status: "Completed",
      trip_id: trip_id,
    };
    complete(body);
    navigate(`/trips/history`);
  };
  // FUNCTION TO HANDLE USER CLICK OF CANCELLED BUTTON, ALTERING TRIP STATUS AND NO LONGER DISPLAYING ON MY UPCOMING TRIPS PAGE; NAVIGATES TO TRIP HISTORY PAGE //
  const handleCancel = () => {
    const body = {
      trip_status: "Cancelled",
      trip_id: trip_id,
    };
    cancel(body);
    navigate(`/trips/history`);
  };
  if (isLoading) return <div>Loading...</div>;
  // RENDERED COMPONENT TO DISPLAY TRIP TITLE, DESCRIPTION, AND LISTED TRIP NOTES WITH BUTTONS TO CANCEL OR COMPLETE TRIP //
  return (
    <div>
      <div
        className="container"
        style={{ height: "900px", position: "relative" }}
      >
        <div className="trip-list-header-2">
          <h2 className="trip-title-line mb-3">My Trip to {trip?.park}</h2>
          <div className="trip-detail-date">
            {trip?.start_date} <span>to</span> {trip?.end_date}
          </div>
        </div>
        <div className="card">
          <div className="card-body bulletin-image">
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
          </div>
          <div className="">
            <div>
              <div className="card button-background">
                <div className="card-body">
                  <div className="col-sm">
                    <button
                      onClick={handleCancel}
                      id={trip_id}
                      disabled={trip?.trip_status === "Cancelled"}
                      className="btn cancel-button mx-2"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleComplete}
                      id={trip_id}
                      disabled={trip?.trip_status === "Completed"}
                      className="btn complete-button"
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
