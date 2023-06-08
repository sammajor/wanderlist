// import { useEffect, useState } from "react";
// import Construct from "./Construct.js";
// import ErrorNotification from "./ErrorNotification";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Accounts/LoginForm.js";
import SignUpForm from "./Accounts/SignUpForm.js";
import LogoutForm from "./Accounts/LogoutForm.js";
import ListTrips from "./Trips/ListTrips.js";
import CreateTripForm from "./Trips/CreateTripForm.js";
import CreateTripNoteForm from "./Notes/createTripNoteForm";
import ParkList from "./Parks/ParkList.js";
import ParkDetails from "./Parks/ParkDetailPage.js";
import NoteDetail from "./Notes/NoteDetail";
import TripDetail from "./Trips/TripDetail";
import Nav from "./Nav";
import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";

import TripHistoryList from "./Trips/TripHistoryPage";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div style={{backgroundColor: "#EDEDE9"}}>
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
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
