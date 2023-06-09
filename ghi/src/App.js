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
import Nav from "./Main/Nav";
import HomePage from "./Main/HomePage";
import PageNotFound from "./Main/PageNotFound";

import TripHistoryList from "./Trips/TripHistoryPage";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div style={{ backgroundColor: "#EDEDE9" }}>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/logout" element={<LogoutForm />} />
          {/* TRIP ROUTES */}
          <Route path="trips">
            <Route index element={<ListTrips />} />
            <Route path=":trip_id" element={<TripDetail />} />
            <Route path=":trip_id/notes/:note_id" element={<NoteDetail />} />
            <Route path="history" element={<TripHistoryList />} />
          </Route>
          <Route path="/createtrip" element={<CreateTripForm />} />
          <Route path="/createtripnote" element={<CreateTripNoteForm />} />
          {/* PARK ROUTES */}
          <Route path="parks">
            <Route index element={<ParkList />} />
            <Route path=":park_id" element={<ParkDetails />} />
          </Route>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
