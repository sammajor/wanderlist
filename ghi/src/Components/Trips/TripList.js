function TripList() {
  return (
    <div>
      <h1>My UpComing Trips</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Park</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {/* #### FILTER APPOINTMENTS BY STATUS AND LOOP THROUGH #### */}
          {appointments
            .filter((appointment) => appointment.status === "confirmed")
            .map((appointment) => {
              // #### CHECK IF VIN IN LIST OF AUTOS ####
              if (
                automobiles.some(
                  (automobile) => automobile.vin == appointment.vin
                )
              ) {
                // #### IF MATCH GET OUT OF LIST ####
                const getAuto = automobiles.filter(
                  (automobile) => automobile.vin == appointment.vin
                );
                // #### SET VIP STATUS EITHER "YES" OR "NO" ####
                if (getAuto[0].sold == true) {
                  appointment["vip"] = "yes";
                } else if (getAuto[0].sold === false) {
                  appointment["vip"] = "no";
                }
                // #### IF NO MATCH RETURN VIP STATUS "NO" ####
              } else if (
                !automobiles.some(
                  (automobile) => automobile.vin === appointment.vin
                )
              ) {
                appointment["vip"] = "no";
              }
              // #### PARSE DATE TO DISPLAY IN TABLE ####
              let dateTime = parseISO(appointment.date_time);

              return (
                <tr key={trip.id}>
                  <td>{trip.park}</td>
                  <td>{trip.start_date}</td>
                  <td>{trip.end_date}</td>
                  <td>{format(dateTime, "MM/dd/yyyy")}</td>
                  <td>{format(dateTime, "h:mm b")}</td>
                  <td>
                    {appointment.technician.first_name}{" "}
                    {appointment.technician.last_name}
                  </td>
                  <td>{appointment.reason}</td>
                  <td>
                    <button
                      onClick={handleCancelButton}
                      id={appointment.id}
                      type="button"
                      className="btn btn-danger"
                    >
                      Cancel
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={handleFinishButton}
                      id={appointment.id}
                      type="button"
                      className="btn btn-success"
                    >
                      Finish
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
export default TripList;
