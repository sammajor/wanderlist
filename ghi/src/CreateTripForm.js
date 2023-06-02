import { useCreateTripMutation } from "./store/apiSlice";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const CreateTripForm = () => {
    const [createTrip] = useCreateTripMutation();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [park, setPark] = useState('');
    const navigate = useNavigate();

    const formatDate = (formattedDate) => {
        const date = new Date(formattedDate);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const createTripData = {
            start_date: formatDate(startDate),
            end_date: formatDate(endDate),
            park: park
        };
        createTrip(
            createTripData,
            // `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/trips`
        );
        e.target.reset();
        navigate("/triplist");
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
                onChange={(e) => {
                    setStartDate(e.target.value);
                }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">End Date</label>
                <input
                name="endDate"
                type="date"
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
                className="form-control"
                onChange={(e) => {
                    setPark(e.target.value);
                }}
                />
            </div>
            <div>
                <input className="btn btn-primary" type="submit" value="Create Trip" />
            </div>
            </form>
        </div>
        </div>
    );
}

export default CreateTripForm;