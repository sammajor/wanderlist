import { useParams } from "react-router-dom";
import { useGetParkByIDQuery, useGetTokenQuery } from "../store/apiSlice";
import { Link } from "react-router-dom";
import { useGetOneAlertQuery } from "../store/alertSlice";

const ParkDetails = () => {
  const { park_id } = useParams();
  const { data: park, isLoading } = useGetParkByIDQuery(park_id);
  const { data: token } = useGetTokenQuery();
  const { data: alerts } = useGetOneAlertQuery(park?.park_code);
  const rows = [];
  const actList = park?.activities;
  for (let i = 0; i < actList?.length; i += 3) {
    let activityGroup = [];
    activityGroup.push(actList[i]);
    activityGroup.push(actList[i + 1]);
    activityGroup.push(actList[i + 2]);
    rows.push(activityGroup);
  }
  const activityRows = rows.map((row) => {
    const [a, b, c] = row;
    return (
      <tr key={a?.id}>
        <td className="table-cell">{a?.name}</td>
        <td className="table-cell">{b?.name}</td>
        <td className="table-cell">{c?.name}</td>
      </tr>
    );
  });
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div className="container">
        <div className="title-background mb-5 detail-header">
          <h1
            className="title-line mb-3"
            style={{ position: "absolute", left: "2px", top: "2px" }}
          >
            {park?.full_name}
          </h1>
          <h2
            className="list-group-item h2-line"
            style={{
              position: "absolute",
              left: "2px",
              top: "55px",
            }}
          >
            Location: {park?.city}, {park?.state}
          </h2>
        </div>
        <div className="card mx-auto shadow mt-3" style={{ width: "62rem" }}>
          <img
            src={park?.park_image}
            className="card-img-top"
            alt="Responsive image"
            style={{ width: "62rem", height: "35rem" }}
          />
          <div className="card-header">
            Description: {park?.description}
            <div className="card-body table table-striped">
              <thead>Activities:</thead>
              {activityRows}
            </div>
          </div>
          <div
            className="card mx-auto shadow mt-4 border border-danger"
            style={{ width: "62rem" }}
          >
            <div className="card-header text-danger alert-header">
              Park Alerts
            </div>
            <div className="card-body">
              {alerts?.data.map((alert, index) => {
                return (
                  <div key={alert.id}>
                    <div>
                      {index + 1}. {alert.title}
                    </div>
                    <div>{alert.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="text-center">
          {token && (
            <Link to="/createtrip" className="btn btn-trip mt-3">
              Create Trip
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default ParkDetails;
