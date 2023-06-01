import {
  useCreateTripNoteMutation,
  useGetAllTripsQuery,
} from "../store/apiSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTripNoteForm = () => {
  const { data, isLoading } = useGetAllTripsQuery();
  const [createTripNote] = useCreateTripNoteMutation();
  const [title, setTitle] = useState("");
  const [trip, setTrip] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleTripChange = (e) => {
    setTrip(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const createTripNoteData = {
      title: title,
      trip_id: Number(trip),
      description: description,
    };
    createTripNote(createTripNoteData);
    e.target.reset();
    // navigate("/triplist");
  };

  if (isLoading) return <div>...isLoading</div>;
  return (
    <div className="card text-bg-light mb-3">
      <h5 className="card-header">Write a Note</h5>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              name="title"
              type="text"
              className="form-control"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <select
              onChange={handleTripChange}
              value={trip}
              name="trip"
              id="trip"
              required
            >
              <option value="">Select a Trip</option>
              {data.map((data) => (
                <option key={data.id} value={data.id}>
                  {`${data.park}, FROM ${data.start_date} TO ${data.end_date}`}
                </option>
              ))}
              ;
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              name="description"
              type="textarea"
              className="form-control"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div>
            <input className="btn btn-primary" type="submit" value="Publish" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTripNoteForm;
