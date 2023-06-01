import { useGetTripNoteQuery } from "../store/apiSlice";

const NoteDetail = () => {
  const { data, isLoading } = useGetTripNoteQuery();
  console.log(data);

  if (isLoading) return <div>...loading</div>;
  return (
    <div>
      <div className="container">
        <div className="card-header">Trip Note</div>
        <div className="card-body">Note Description</div>
      </div>
    </div>
  );
};
export default NoteDetail;
