import { Link } from "react-router-dom";

// SETS UNIFORM STRUCTURE OF INDIVIDUAL CARD RENDERED ON PARK LIST COMPONENT //
const ParkCard = (props) => {
  const { park_image, full_name, city, state, description, park_id } = props;

  return (
    <div
      key={park_id}
      className="card my-3 mx-5 shadow card-shadow"
      style={{ width: "300px" }}
    >
      <img src={park_image} alt="park pic" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title card-title-underline">{full_name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {city}, {state}
        </h6>
        <p className="card-text">{description}</p>
      </div>
      <div className="text-center">
        <Link
          to={`/parks/${park_id}`}
          className="btn dkg-btn-color btn-sm mb-2"
        >
          View
        </Link>
      </div>
    </div>
  );
};
export default ParkCard;
