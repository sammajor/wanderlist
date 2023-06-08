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
  };

  if (isLoading) return <div>...isLoading</div>;


  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundImage:"url('https://images.theoutbound.com/2018/04/09/19/d00aefba5547c5433285d0be0e37953a?&fit=crop&w=970&h=550&auto=format&dpr=2&q=60')", backgroundSize: "cover" }} >
      <div className="card text-bg-light mb-3" style={{ width: "500px", height: "370px" }}>
        <h5 className="card-header note-title">Write a Note</h5>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label note-details" >Title</label>
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
              <label className="form-label note-details">Description</label>
              <input
                name="description"
                type="textarea"
                className="form-control"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div className="text-center">
              <input className="btn dkg-btn-color" type="submit" value="Publish" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTripNoteForm;
