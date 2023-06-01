import { useParams } from "react-router-dom";
import { useGetTripQuery, useGetAllTripNotesQuery } from "../store/apiSlice";
import Carousel from "./Carousel";
import "./carousel.css";
import NoteCard from "./NoteCard";
import { useNavigate } from "react-router-dom";

const TripDetail = () => {
  const { trip_id } = useParams();
  const { data: park, isLoading } = useGetTripQuery(trip_id);
  const { data: notes } = useGetAllTripNotesQuery(trip_id);
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    const { id } = e.target;
    navigate(`/trips/${trip_id}/notes/${id}`);
  };

  const handleDelete = (e) => {};
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <div className="container">
        <div className="card-header">My Trip to {park?.park}</div>
        <div className="subheader">
          {park?.start_date} - {park?.end_date}
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
                <ul>
                  <li>
                    <td>
                      <button
                        onClick={handleDelete}
                        id={trip_id}
                        className="btn btn-sm btn-danger"
                      >
                        Cancel
                      </button>
                    </td>
                  </li>
                  <li>Finish</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TripDetail;
