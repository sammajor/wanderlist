import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TripList from "./Components/Trips/TripList";
import Nav from "./Nav";

function App() {
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="trips">
        <Route index element={<TripList />} />
      </Route>
    </Routes>
  </BrowserRouter>;
}

export default App;
