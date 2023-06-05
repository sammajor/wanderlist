import { useParams } from "react-router-dom";
import { useGetParkByIDQuery, useGetTokenQuery } from "../store/apiSlice";
import { Link } from "react-router-dom";
import { useGetOneAlertQuery } from "../store/alertSlice";

const ParkDetails = () => {
    const {park_id} = useParams()
    const { data: park, isLoading } = useGetParkByIDQuery(park_id)
    const { data: token } = useGetTokenQuery();
    const { data: alerts } = useGetOneAlertQuery(park?.park_code);
    if (isLoading) return <div>Loading...</div>
    return (
        <div>
            <div className="row">
                <div className="col-8">
                    <h1 className="park_name">{park?.full_name}</h1>
                </div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={park?.park_image} alt="First img"/>
                        </div>
                    </div>
            </div>
               <ul className="list-group">
                <li className="list-group-item">
                    Location: {park?.city}, {park?.state}
                </li>
                <li className="list-group-item">
                    Description: {park?.description}
                </li>
                <li className="list-group-item">
                    Activities:
                    <ul>
                        {park?.activities.map((activity, index) => (
                            <li key={index}> {activity.name}</li>
                        ))}
                    </ul>
                </li>
                </ul>
                <div className="text-center">
                { token && (
                    <Link to="/createtrip" className="btn btn-success" style={{ width: "100px" }}>
                        Create Trip
                    </Link>
                )}
                </div>
            </div>
        </div>
  );
};
export default ParkDetails;
