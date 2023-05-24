// import { useEffect, useState } from "react";
// import Construct from "./Construct.js";
// import ErrorNotification from "./ErrorNotification";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm.js";
import Testing from "./Testing.js";
import ParksList from "./Parks/ParkList.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route path="test" element={<Testing />} />
        <Route path="parks" element={<ParksList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
