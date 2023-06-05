import { useCreateTripMutation } from "../store/apiSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { format, parseISO } from "date-fns";

const CreateTripForm = () => {
  const [createTrip] = useCreateTripMutation();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [park, setPark] = useState("");
  const navigate = useNavigate();
  const [dateMin, setDateMin] = useState("");

  const handleStartDate = (e) => {
    const { value } = e.target;
    setDateMin(value);
    setStartDate(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newStart = parseISO(startDate);
    const newEnd = parseISO(endDate);

    const createTripData = {
      start_date: format(newStart, "yyyy-MM-dd"),
      end_date: format(newEnd, "yyyy-MM-dd"),
      park: park,
    };

    createTrip(createTripData);
    e.target.reset();
    navigate("/trips");
  };
  return (
    <div className="card text-bg-light mb-3">
      <h5 className="card-header">Create a Trip</h5>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Start Date</label>
            <input
              name="startDate"
              type="date"
              className="form-control"
              min={dateMin}
              onChange={handleStartDate}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">End Date</label>
            <input
              name="endDate"
              type="date"
              min={dateMin}
              className="form-control"
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Park</label>
            <input
              name="park"
              type="text"
              min={dateMin}
              className="form-control"
              onChange={(e) => {
                setPark(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              className="btn btn-primary"
              type="submit"
              value="Create Trip"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTripForm;
