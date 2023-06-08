import { useGetTripNoteQuery } from "../store/apiSlice";
import { useDeleteTripNoteMutation } from "../store/apiSlice";
import { useNavigate, useParams } from "react-router-dom";

const NoteDetail = () => {
  const { trip_id, note_id } = useParams();
  const { data, isLoading } = useGetTripNoteQuery({ trip_id, note_id });
  const [deleteNote] = useDeleteTripNoteMutation();
  const navigate = useNavigate();

  const handleDeleteNote = async () => {
    deleteNote({ trip_id, note_id });
    navigate(`/trips/${trip_id}`);
  };

  if (isLoading) return <div>...loading</div>;

  return (
    <>
      <div
        className="container"
        style={{ position: "relative", height: "900px" }}
      >
        <div className="trip-list-header">
          <h2 className="trip-title-line mb-3">{data?.title}</h2>
        </div>
        <div className="card mx-auto justify-content-center" style={{ width: "62rem" }}>
          <div className="card-header">Trip Note</div>
          <div className="card-body">
            <h5 className="card-title">{data?.title}</h5>
            <p className="card-text">{data?.description}</p>
            <button className="btn btn-delete" onClick={handleDeleteNote}>
              Delete Note
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default NoteDetail;
