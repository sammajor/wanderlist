import { useParams } from "react-router-dom"
import { useGetParkByIDQuery } from "../store/apiSlice";
import { Link } from "react-router-dom";

const ParkDetails = () => {
    const {park_id} = useParams()
    const { data, isLoading } = useGetParkByIDQuery(park_id)
    if (isLoading) return <div>Loading...</div>
    return (
        <div>
            <div className="row">
                <div className="col-8">
                    <h1 className="park_name">{data?.full_name}</h1>
                </div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={data?.park_image} alt="First img"/>
                        </div>
                    </div>
            </div>
               <ul className="list-group">
                <li className="list-group-item">
                    Location: {data?.city}, {data?.state}
                </li>
                <li className="list-group-item">
                    Description:{data?.description}
                </li>
                <li className="list-group-item">
                    Activities:
                    <ul>
                        {data?.activities.map((activity, index) => (
                            <li key={index}> {activity.name}</li>
                        ))}
                    </ul>
                </li>
                </ul>
                <div className="text-center">
                    <Link to="/createtrip" className="btn btn-success" style={{ width: "100px" }}>
                        Create Trip
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default ParkDetails;
