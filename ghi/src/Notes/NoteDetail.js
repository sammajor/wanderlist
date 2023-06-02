import { useGetTripNoteQuery } from "../store/apiSlice";
import { useParams } from "react-router-dom";

const NoteDetail = () => {
  const { trip_id, note_id } = useParams();
  const { data, isLoading } = useGetTripNoteQuery({ trip_id, note_id });

  if (isLoading) return <div>...loading</div>;

  return (
<div className="card">
  <div className="card-header">
    Trip Note
  </div>
  <div className="card-body">
    <h5 className="card-title">{data?.title}</h5>
    <p className="card-text">{data?.description}</p>
  </div>
</div>
  );
};
export default NoteDetail;

