

const ParkCard = (props) => {

    return (
        <div
              key={props.park_id}
              className="card my-3 mx-5 shadow"
              style={{ width: "300px" }}
            >
              <img
                src={props.park_image}
                alt="park pic"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{props.full_name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {props.city}, {props.state}
                </h6>
                <p className="card-text">{props.description}</p>
              </div>
            </div>
    )
}
export default ParkCard;
