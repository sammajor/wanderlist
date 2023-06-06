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
    <div className="card">
      <div className="card-header">Trip Note</div>
      <div className="card-body">
        <h5 className="card-title">{data?.title}</h5>
        <p className="card-text">{data?.description}</p>
        <button className="btn btn-danger" onClick={handleDeleteNote}>
          Delete Note
        </button>
      </div>
    </div>
  );
};
export default NoteDetail;
