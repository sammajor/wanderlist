// import { useEffect, useState } from "react";
// import Construct from "./Construct.js";
// import ErrorNotification from "./ErrorNotification";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm.js";
import SignUpForm from "./store/SignUpForm.js";
import LogoutForm from "./store/LogoutForm.js";
import ListTrips from "./Trips/ListTrips.js";
import CreateTripForm from "./Trips/CreateTripForm.js";
import CreateTripNoteForm from "./Notes/createTripNoteForm";
import ParkList from "./Parks/ParkList.js";
import ParkDetails from "./Parks/ParkDetailPage.js";
import NoteDetail from "./Notes/NoteDetail";
import TripDetail from "./Trips/TripDetail";
import Nav from "./Nav";

import TripHistoryList from "./Trips/TripHistoryPage";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <div>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/logout" element={<LogoutForm />} />
          <Route path="/trips" element={<ListTrips />} />
          <Route path="/createtrip" element={<CreateTripForm />} />
          <Route path="/createtripnote" element={<CreateTripNoteForm />} />
          <Route path="/parks" element={<ParkList />} />
          <Route path="/parks/:park_id" element={<ParkDetails />} />
          <Route path="trips/:trip_id" element={<TripDetail />} />
          <Route
            path="/trips/:trip_id/notes/:note_id"
            element={<NoteDetail />}
          />
          <Route path="trips/history" element={<TripHistoryList />} />
        </Routes>
      </div>
    </BrowserRouter>
    // const [launchInfo, setLaunchInfo] = useState([]);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //   async function getData() {
    //     let url = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/launch-details`;
    //     console.log("fastapi url: ", url);
    //     let response = await fetch(url);
    //     console.log("------- hello? -------");
    //     let data = await response.json();

    //     if (response.ok) {
    //       console.log("got launch data!");
    //       setLaunchInfo(data.launch_details);
    //     } else {
    //       console.log("drat! something happened");
    //       setError(data.message);
    //     }
    //   }
    //   getData();
    // }, []);

    // return (
    //   <div>
    //     <ErrorNotification error={error} />
    //     <Construct info={launchInfo} />
    //   </div>
    // );
  );
}

export default App;
