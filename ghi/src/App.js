// import { useEffect, useState } from "react";
// import Construct from "./Construct.js";
// import ErrorNotification from "./ErrorNotification";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm.js";
import SignUpForm from "./store/SignUpForm.js";
import LogoutForm from "./store/LogoutForm.js";
import Testing from "./Testing.js";
import ParkList from "./Parks/ParkList.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/test" element={<Testing />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/logout" element={<LogoutForm />} />
          <Route path="parks" element={<ParkList />} />
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
