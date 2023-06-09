import { useCreateTripMutation } from "../store/apiSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format, parseISO } from "date-fns";

const CreateTripForm = () => {
  // SETS STATE VARIABLES AND NAVIGATION CAPABILITY; ACCESSES SLICE FOR TRIPS //
  const [createTrip] = useCreateTripMutation();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [park, setPark] = useState("");
  const navigate = useNavigate();
  const [dateMin, setDateMin] = useState("");

  // FUNCTION TO HANDLE USER INPUT FOR START DATE //
  const handleStartDate = (e) => {
    const { value } = e.target;
    setDateMin(value);
    setStartDate(value);
  };
  // FUNCTION TO HANDLE USER INPUT FOR START AND END DATE, PROHIBITING USER FROM SELECTING DATES PRIOR TO START //
  const handleSubmit = (e) => {
    e.preventDefault();
    const newStart = parseISO(startDate);
    const newEnd = parseISO(endDate);
  // FUNCTION TO CREATE TRIP DATE DICTIONARY AND POST TO DATABASE //
    const createTripData = {
      start_date: format(newStart, "yyyy-MM-dd"),
      end_date: format(newEnd, "yyyy-MM-dd"),
      park: park,
    };

    createTrip(createTripData);
    e.target.reset();
    navigate("/trips");
  };
  // RENDERED COMPONENT WHICH ALLOWS USER INPUT OF START DATE, END DATE, PARK NAME, AND SUBMISSION UPON BUTTON CLICK //
  return (
    <div className="d-flex justify-content-center align-items-center vh-100"
    style={{ backgroundImage: 'url("https://thegeekycamper.com/wp-content/uploads/2020/10/Shenandoah-National-Park-Campgrounds-Guide-1536x864.jpg")',
    backgroundSize: "cover" }}>
      <div className="card text-bg-light mb-3" style={{ width: "550px", height: "410px" }}>
        <h5 className="card-header create-trip-title">Create a Trip</h5>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label select-date">Start Date</label>
              <input
                name="startDate"
                type="date"
                className="form-control"
                min={dateMin}
                onChange={handleStartDate}
              />
            </div>
            <div className="mb-3">
              <label className="form-label select-date">End Date</label>
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
              <label className="form-label select-date">Park</label>
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
            <div className="text-center">
              <input
                className="btn dkg-btn-color"
                type="submit"
                value="Create Trip"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTripForm;
